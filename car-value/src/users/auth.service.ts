import { Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
import * as bcrypt from "bcryptjs";



@Injectable()
export class AuthUserService {
    constructor(private usersService: UsersService){}

    async signUp(email:string, password:string){
        //user email checking
        const users=await this.usersService.findAll(email)

        if(users.length){
            return "user already registered"
        }

        //hashing the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password, salt)

        //creating the user
        const user=await this.usersService.create(email,hashedPassword)

        //return the user
        return user
    }

    signIn(){}
}