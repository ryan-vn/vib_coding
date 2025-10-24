import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { InterviewService } from './interview.service';

@ApiTags('面试管理')
@ApiBearerAuth()
@Controller('interviews')
export class InterviewController {
  constructor(private interviewService: InterviewService) {}

  @Get()
  @ApiOperation({ summary: '获取所有面试' })
  async findAll() {
    return this.interviewService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取面试详情' })
  async findOne(@Param('id') id: string) {
    return this.interviewService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: '创建面试' })
  async create(@Body() interviewData: any) {
    return this.interviewService.create(interviewData);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新面试' })
  async update(@Param('id') id: string, @Body() interviewData: any) {
    return this.interviewService.update(id, interviewData);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除面试' })
  async remove(@Param('id') id: string) {
    return this.interviewService.remove(id);
  }
}

