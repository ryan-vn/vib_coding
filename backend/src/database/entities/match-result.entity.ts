import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Job } from './job.entity';
import { Resume } from './resume.entity';

@Entity('match_results')
export class MatchResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  jobId: string;

  @ManyToOne(() => Job)
  @JoinColumn({ name: 'jobId' })
  job: Job;

  @Column()
  resumeId: string;

  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resumeId' })
  resume: Resume;

  @Column('decimal', { precision: 5, scale: 2 })
  score: number;

  @Column('simple-array')
  matchedSkills: string[];

  @CreateDateColumn()
  createdAt: Date;
}

