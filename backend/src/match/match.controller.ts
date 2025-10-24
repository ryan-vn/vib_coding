import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { MatchService } from './match.service';

@ApiTags('匹配推荐')
@ApiBearerAuth()
@Controller('match')
export class MatchController {
  constructor(private matchService: MatchService) {}

  @Post('calculate')
  @ApiOperation({ summary: '计算匹配度' })
  async calculateMatch(@Body() data: { jobId: string; resumeId: string }) {
    return this.matchService.calculateMatch(data.jobId, data.resumeId);
  }

  @Get('job/:jobId')
  @ApiOperation({ summary: '获取岗位的匹配简历' })
  async findMatchesByJob(@Param('jobId') jobId: string) {
    return this.matchService.findMatchesByJob(jobId);
  }

  @Get('resume/:resumeId')
  @ApiOperation({ summary: '获取简历的匹配岗位' })
  async findMatchesByResume(@Param('resumeId') resumeId: string) {
    return this.matchService.findMatchesByResume(resumeId);
  }
}

