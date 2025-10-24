import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resume } from '../database/entities/resume.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private resumeRepository: Repository<Resume>,
  ) {}

  async findAll(): Promise<Resume[]> {
    return this.resumeRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string): Promise<Resume> {
    return this.resumeRepository.findOne({ where: { id, isDeleted: false } });
  }

  async create(resumeData: Partial<Resume>): Promise<Resume> {
    const resume = this.resumeRepository.create(resumeData);
    return this.resumeRepository.save(resume);
  }

  async update(id: string, resumeData: Partial<Resume>): Promise<Resume> {
    await this.resumeRepository.update(id, resumeData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    // 软删除
    await this.resumeRepository.update(id, { isDeleted: true });
  }
}

