import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NutrientDocument = Nutrient & Document;

@Schema()
export class Nutrient {

    @Prop()
    NO: number;

    @Prop()
    나트륨: number;

    @Prop()
    단백질: number;

    @Prop()
    수분: number;

    @Prop()
    식품명: string;

    @Prop()
    식품상세분류: string;

    @Prop()
    에너지: number;

    @Prop()
    인: number;

    @Prop()
    칼륨: number;
}

export const NutrientSchema = SchemaFactory.createForClass(Nutrient);