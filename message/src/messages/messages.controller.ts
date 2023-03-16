import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {createMessagesDto} from './dtos/create-message.dtos'
@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){

    }

    @Post()
    createMessages(@Body() body:createMessagesDto){
        console.log(body);    
    }
    @Get('/:id')
    getMessage(@Param('id') id:string){
        console.log(id);
    }
}
