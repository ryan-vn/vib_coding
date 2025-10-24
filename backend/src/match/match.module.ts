import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { MatchResult } from '../database/entities/match-result.entity';
import { Job } from '../database/entities/job.entity';
import { Resume } from '../database/entities/resume.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MatchResult, Job, Resume])],
  providers: [MatchService],
  controllers: [MatchController],
  exports: [MatchService],
})
export class MatchModule {}

