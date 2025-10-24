import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { QuestionService } from './question.service';

@ApiTags('题库管理')
@ApiBearerAuth()
@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  @ApiOperation({ summary: '获取所有题目' })
  async findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取题目详情' })
  async findOne(@Param('id') id: string) {
    return this.questionService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: '创建题目' })
  async create(@Body() questionData: any) {
    return this.questionService.create(questionData);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新题目' })
  async update(@Param('id') id: string, @Body() questionData: any) {
    return this.questionService.update(id, questionData);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除题目' })
  async remove(@Param('id') id: string) {
    return this.questionService.remove(id);
  }
}

