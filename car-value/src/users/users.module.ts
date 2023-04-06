import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from "./user.entity";
import { AuthUserService } from './auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService,AuthUserService]
})
export class UsersModule {}
