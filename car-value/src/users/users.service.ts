import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from 'typeorm';
import * as bcrypt from "bcryptjs";


@Injectable()
export class UsersService {
constructor(@InjectRepository(User) private repo:Repository<User>){}

async create(email:string,password:string){
    const salt=await bcrypt.genSalt(10);
    password=await bcrypt.hash(password, salt)
    const userCheck=await this.findAll(email)
    if(userCheck!=null){
      return "user already exist" 
    }
    const user=this.repo.create({
        email,
        password
    })//creating a new instance to the entity but doesnt persist it to db (need to use save method)

    return this.repo.save(user)//adds or update the record in db
}

findOne(id:any){
    return this.repo.findOneBy({id});
}

find(){
    return this.repo.find()
}

findAll(email:string){
    // const user=this.findOne(email)

    return this.repo.find({ where: { email } })
}

async update(id:number,attrb:Partial<User>){
    const user=await this.findOne(id)
    if(!user){
        throw new Error('USER NOT FOUND')
    }
    Object.assign(user,attrb)
    return this.repo.save(user)
}

async remove(id:number){
    const user=await this.findOne(id)
    if(!user){
        throw new Error("USER NOT FOUND");
    }
    return this.repo.remove(user)
}

}
