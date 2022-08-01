import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from '../shared/dto/create-comment.dto';
import {ApiTags, SwaggerModule} from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getComments() {
    return { statusCode: 200, data: await this.commentService.getComments };
  }

  @Get(':id')
  async getComment(@Param('id') id: number) {
    return { statusCode: 200, data: await this.commentService.getComment(id) };
  }

  @Post('create')
  async createComment(@Body() comment: CreateCommentDto) {
    return {
      statusCode: 200,
      data: await this.commentService.createComment(comment),
    };
  }
}
