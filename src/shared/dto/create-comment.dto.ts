import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  user_id: number;
  @ApiProperty()
  post_id: number;
  @ApiProperty()
  content: string;
  @ApiProperty()
  upload_time: string;
}
