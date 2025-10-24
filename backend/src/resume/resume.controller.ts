import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ResumeService } from './resume.service';

@ApiTags('简历管理')
@ApiBearerAuth()
@Controller('resumes')
export class ResumeController {
  constructor(private resumeService: ResumeService) {}

  @Get()
  @ApiOperation({ summary: '获取所有简历' })
  async findAll() {
    return this.resumeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取简历详情' })
  async findOne(@Param('id') id: string) {
    return this.resumeService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: '创建简历' })
  async create(@Body() resumeData: any) {
    return this.resumeService.create(resumeData);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新简历' })
  async update(@Param('id') id: string, @Body() resumeData: any) {
    return this.resumeService.update(id, resumeData);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除简历' })
  async remove(@Param('id') id: string) {
    return this.resumeService.remove(id);
  }
}

