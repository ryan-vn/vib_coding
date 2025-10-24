import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JobService } from './job.service';

@ApiTags('岗位管理')
@ApiBearerAuth()
@Controller('jobs')
export class JobController {
  constructor(private jobService: JobService) {}

  @Get()
  @ApiOperation({ summary: '获取所有岗位' })
  async findAll() {
    return this.jobService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取岗位详情' })
  async findOne(@Param('id') id: string) {
    return this.jobService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: '创建岗位' })
  async create(@Body() jobData: any) {
    return this.jobService.create(jobData);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新岗位' })
  async update(@Param('id') id: string, @Body() jobData: any) {
    return this.jobService.update(id, jobData);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除岗位' })
  async remove(@Param('id') id: string) {
    return this.jobService.remove(id);
  }
}

