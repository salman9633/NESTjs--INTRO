import { Schema,Prop } from "@nestjs/mongoose";


@Schema()
export class userSchema{
    @Prop()
    userName:string

    @Prop()
    email:string

    @Prop()
    password:string
}

