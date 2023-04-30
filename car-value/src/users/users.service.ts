import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
constructor(@InjectRepository(User) private repo:Repository<User>){}

async create(email:string,password:string){
    
    const user=this.repo.create({
        email,
        password
    })//creating a new instance to the entity but doesnt persist it to db (need to use save method)

    return this.repo.save(user)//adds or update the record in db
}

findOne(id:any){
    if(!id){
        return null
    }
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
