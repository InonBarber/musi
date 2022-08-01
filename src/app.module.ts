import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Average_raters } from './models/average_rates.model';
import { MusiPost } from './models/post.model';
import { User } from './models/user.model';
import { Comment } from './models/comment.model';
import { SerialRater } from './models/serial-raters.model';
import { TagModel } from './models/tag.model';
import { TAGS_TAG_ID_TO_POST_Model } from './models/tags_tag_id_to_post.model';
import { PostsModule } from './posts/posts.module';
import { CommentModule } from './comment/comment.module';
import { CommentController } from './comment/comment.controller';
import { PostsController } from './posts/posts.controller';
import { CommentService } from './comment/comment.service';
import { PostsService } from './posts/posts.service';
import { UsersService } from './user/user.service';
import { UsersController } from './user/user.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'bamba.cs.colman.ac.il',
      port: 3306,
      username: 'cs115',
      password: 'Move@115',
      database: 'MusiMatch',
      // dialect: 'mariadb',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: '',
      // database: 'musimatch',
      models: [
        Average_raters,
        MusiPost,
        User,
        Comment,
        TagModel,
        TAGS_TAG_ID_TO_POST_Model,
      ],
      autoLoadModels: true,
      // sync: {
      //   force: true,
      // },
    }),
    SequelizeModule.forFeature([
      Average_raters,
      MusiPost,
      User,
      Comment,
      SerialRater,
      TagModel,
    ]),
    PostsModule,
  ],
  controllers: [
    AppController,
    CommentController,
    PostsController,
    UsersController,
  ],
  providers: [AppService, CommentService, PostsService, UsersService],
})
export class AppModule {}
