import { CreatePostDto } from '../shared/dto/create-post.dto';
import { Comment } from '../models/comment.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MusiPost } from '../models/post.model';
import { CreateCommentDto } from '../shared/dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private comment: typeof Comment) {}

  async getComments() {
    return this.comment.findAll({ include: [MusiPost] });
  }

  async getComment(id: number) {
    return this.comment.findByPk(id, { include: [MusiPost] });
  }

  async createComment(comment: CreateCommentDto) {
    await this.comment.create({
      ...comment,
    });
  }

  async remove(id: number): Promise<void> {
    const comment = await this.getComment(id);
    await comment.destroy();
  }
}
