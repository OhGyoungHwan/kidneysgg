import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BoardDocument = Board & Document;

@Schema({timestamps:true})
export class Board {

    @Prop()
    작성자: string;

    @Prop()
    조회수: number;

    @Prop()
    제목: string;

    @Prop()
    내용: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);