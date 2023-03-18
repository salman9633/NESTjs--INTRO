import { MessageRepository } from './messages.repository'
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
    // messageRepo:MessageRepository
    constructor(public messageRepo: MessageRepository) {
        //service is creating it's own dependencies
        // this.messageRepo= messageRepo
    }

    findOne(id: string) {
        return this.messageRepo.findOne(id)
    }
    findAll() {
        return this.messageRepo.findAll()
    }
    create(content: string) {
        return this.messageRepo.create(content)
    }
}