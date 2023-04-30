import { Body, Controller,Get,Param,Post, Query,Delete, Patch, Session } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dtos';
import { UpdateUser } from "./dtos/update-user.dto";
import { UsersService } from './users.service';
import { AuthUserService } from './auth.service';

@Controller('auth')

export class UsersController {
    constructor(
        private userService:UsersService,
        private authUserService:AuthUserService
        ){}

  

    @Post('/signup')//create User
    async createUser(@Body() body:createUserDto, @Session() Session:any){
        
        // this.userService.create(body.email,body.password) <code before putting the auth service>
        var user=await this.authUserService.signUp(body.email,body.password)
        console.log(user);
        Session.userId=user.id;
        console.log(Session);
        return user 
    }
    
    @Post('/signin')
    async signin(@Body() body:createUserDto,@Session() session:any){
        var user=await this.authUserService.signIn(body.email,body.password)
        session.userId=user.id;
        console.log(session);
        return user;
    }
    @Get('/whoAmI')
    loggedInUser(@Session() Session:any){
        return this.userService.findOne(Session.userId)
    }

    @Get('/signout')
    signOut(@Session() session:any){
        session.userId=null
    }

    @Get('/user/:id')//Get particular user
    findUser(@Param('id') id:string){
        return this.userService.findOne(parseInt(id))
    }

    @Get('/user')//Get all user
    getAllUser(){
        return this.userService.find()
    }

    @Get()//to get all user with specified specification
    users(@Query('email') email:string){
        return this.userService.findAll(email)
    }

    @Delete('/delete/:id')
    removeUser(@Param('id') id:string){
        return this.userService.remove(parseInt(id))
    }

    @Patch('/update/:id')
    updateUser(@Param('id') id:string,@Body() body:UpdateUser){
        return this.userService.update(parseInt(id),body)
    }

}
