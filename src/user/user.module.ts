import { Module } from '@nestjs/common';
import {UsersService} from "./user.service";

import { User } from '../models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [SequelizeModule.forFeature([Comment])],
    controllers: [],
    providers: [],
    exports: [SequelizeModule],
})
export class CommentModule {}
