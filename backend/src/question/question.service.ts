import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../database/entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async findAll(): Promise<Question[]> {
    return this.questionRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string): Promise<Question> {
    return this.questionRepository.findOne({ where: { id, isDeleted: false } });
  }

  async create(questionData: Partial<Question>): Promise<Question> {
    const question = this.questionRepository.create(questionData);
    return this.questionRepository.save(question);
  }

  async update(id: string, questionData: Partial<Question>): Promise<Question> {
    await this.questionRepository.update(id, questionData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.questionRepository.update(id, { isDeleted: true });
  }
}

