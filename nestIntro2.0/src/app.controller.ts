import { Controller, Get } from "@nestjs/common";

@Controller()//this controller is telling the NEST that here we are trying to create a class that is going to serve as controller inside of our applcatn   
export class AppController{
   @Get()//HTTP get Request
   getRootRoute(){
       return 'Hi There' //This String Will Appear on the Browser
    }
    @Get('/home')
    getHome(){
        return 'Welcome to Home Page'
    }
}

 