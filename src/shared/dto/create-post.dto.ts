import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../models/user.model';
import { TagModel } from '../../models/tag.model';
import { TAGS_TAG_ID_TO_POST_Model } from '../../models/tags_tag_id_to_post.model';
import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty()
  poem_lyrics: string;
  @ApiProperty()
  melody_file_path: string;
  @ApiProperty()
  creator_id: number;
  @ApiProperty()
  post_type: number;
  @ApiProperty()
  average_rater_id: number;
  @ApiProperty()
  average_post_rate: number;
}
