 import { Controller, Get, Module } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'


 @Controller()//this controller is telling the NEST that here we are trying to create a class that is going to serve as controller inside of our applcatn   
 class AppController{
    @Get()//HTTP get Request
    getRootRoute(){
        return 'Hi There' //This String Will Appear on the Browser
     }
 }


 @Module({
    controllers:[AppController]
 })

 class AppModule{}

 async function Connection() {
    const app= await NestFactory.create(AppModule)
    await app.listen(3000)
 }

 Connection()