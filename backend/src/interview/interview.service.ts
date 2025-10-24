import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Interview } from '../database/entities/interview.entity';

@Injectable()
export class InterviewService {
  constructor(
    @InjectRepository(Interview)
    private interviewRepository: Repository<Interview>,
  ) {}

  async findAll(): Promise<Interview[]> {
    return this.interviewRepository.find({
      relations: ['job', 'resume'],
    });
  }

  async findOne(id: string): Promise<Interview> {
    return this.interviewRepository.findOne({
      where: { id },
      relations: ['job', 'resume'],
    });
  }

  async create(interviewData: Partial<Interview>): Promise<Interview> {
    const interview = this.interviewRepository.create(interviewData);
    return this.interviewRepository.save(interview);
  }

  async update(id: string, interviewData: Partial<Interview>): Promise<Interview> {
    await this.interviewRepository.update(id, interviewData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.interviewRepository.delete(id);
  }
}

