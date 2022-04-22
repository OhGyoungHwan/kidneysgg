import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DietDocument = Diet & Document;

@Schema()
export class Diet {

    @Prop()
    NO: number;

    @Prop()
    작성자: string;

    @Prop()
    요리번호: string;

    @Prop()
    식품번호: number;

    @Prop()
    요리제공량: number;

    @Prop()
    나트륨: number;

    @Prop()
    단백질: number;

    @Prop()
    수분: number;

    @Prop()
    에너지: number;

    @Prop()
    인: number;

    @Prop()
    칼륨: number;
}

export const DietSchema = SchemaFactory.createForClass(Diet);