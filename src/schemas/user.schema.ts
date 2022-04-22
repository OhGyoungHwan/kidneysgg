import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop()
    ID: string;

    @Prop()
    몸무게: number;

    @Prop()
    키: number;

    @Prop()
    식단수: number;

    @Prop()
    요리수: number;

    @Prop()
    플렛폼ID: number;

    @Prop()
    플렛폼: string;
}

export const UserSchema = SchemaFactory.createForClass(User);