import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Job } from './job.entity';
import { Resume } from './resume.entity';

export enum InterviewStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('interviews')
export class Interview {
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

  @Column('simple-array')
  interviewerIds: string[];

  @Column()
  scheduleTime: Date;

  @Column({ length: 200 })
  room: string;

  @Column({
    type: 'enum',
    enum: InterviewStatus,
    default: InterviewStatus.PENDING,
  })
  status: InterviewStatus;

  @Column('json', { nullable: true })
  result: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

