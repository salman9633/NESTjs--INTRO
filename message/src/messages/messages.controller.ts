import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { createMessagesDto } from './dtos/create-message.dtos'
import { MessagesService } from "./messages.service";
@Controller('messages')
export class MessagesController {

    messagesService:MessagesService
    constructor(){
        this.messagesService=new MessagesService()
    }

    @Get()
    listMessages() {
        //return is the key here if dont put return here then nest is not onna return any output
        return this.messagesService.findAll()
    }

    @Post()
    createMessages(@Body() body: createMessagesDto) {
        console.log(body.content);
        return this.messagesService.create(body.content)
    }
    @Get('/:id')
    async getMessage(@Param('id') id: string) {
       const message=await this.messagesService.findOne(id);
        console.log(message);
        
       if(!message){
        throw new NotFoundException("MESSAGE NOT FOUND");
       }

       return message
        
    }
}
