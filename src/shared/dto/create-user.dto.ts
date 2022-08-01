import { Column, HasMany } from 'sequelize-typescript';
import { MusiPost } from '../../models/post.model';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  user_name: string;

  @ApiProperty({ description: 'is the user admin' })
  is_admin: string;

  @ApiProperty()
  user_type: number;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  average_rate: number;

  @ApiProperty()
  spotify_url: string;

  @ApiProperty()
  creation_date: string;
}
