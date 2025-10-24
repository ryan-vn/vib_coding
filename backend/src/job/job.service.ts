import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../database/entities/job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  async findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  async findOne(id: string): Promise<Job> {
    return this.jobRepository.findOne({ where: { id } });
  }

  async create(jobData: Partial<Job>): Promise<Job> {
    const job = this.jobRepository.create(jobData);
    return this.jobRepository.save(job);
  }

  async update(id: string, jobData: Partial<Job>): Promise<Job> {
    await this.jobRepository.update(id, jobData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.jobRepository.delete(id);
  }
}

