import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatchResult } from '../database/entities/match-result.entity';
import { Job } from '../database/entities/job.entity';
import { Resume } from '../database/entities/resume.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchResult)
    private matchResultRepository: Repository<MatchResult>,
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
  ) {}

  async calculateMatch(jobId: string, resumeId: string): Promise<MatchResult> {
    const job = await this.jobRepository.findOne({ where: { id: jobId } });
    const resume = await this.resumeRepository.findOne({ where: { id: resumeId } });

    if (!job || !resume) {
      throw new Error('Job or Resume not found');
    }

    // 简单的匹配算法：计算技能交集
    const jobSkills = job.skills || [];
    const resumeSkills = resume.skills || [];
    const matchedSkills = jobSkills.filter((skill) => resumeSkills.includes(skill));
    const score = jobSkills.length > 0 ? (matchedSkills.length / jobSkills.length) * 100 : 0;

    const matchResult = this.matchResultRepository.create({
      jobId,
      resumeId,
      score: parseFloat(score.toFixed(2)),
      matchedSkills,
    });

    return this.matchResultRepository.save(matchResult);
  }

  async findMatchesByJob(jobId: string): Promise<MatchResult[]> {
    return this.matchResultRepository.find({
      where: { jobId },
      relations: ['resume'],
      order: { score: 'DESC' },
    });
  }

  async findMatchesByResume(resumeId: string): Promise<MatchResult[]> {
    return this.matchResultRepository.find({
      where: { resumeId },
      relations: ['job'],
      order: { score: 'DESC' },
    });
  }
}

