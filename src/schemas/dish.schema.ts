import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DishDocument = Dish & Document;

@Schema()
export class Dish {

    @Prop()
    NO: number;

    @Prop()
    작성자: string;

    @Prop()
    요리명: string;

    @Prop()
    식품번호: number;

    @Prop()
    식품제공량: number;

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

export const DishSchema = SchemaFactory.createForClass(Dish);