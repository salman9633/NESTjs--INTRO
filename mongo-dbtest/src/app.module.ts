import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './user/users/users.controller';
import { UsersService } from './user/users/users.service';
import { UsersModule } from './user/users/users.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [UsersModule,
            MongooseModule.forRoot('mongodb://localhost:27017/my-database',function (err){
              if(err){
                console.log("error:",err);
              }else{
                console.log("DB connected successFully");
              }
            })
  ], 
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
