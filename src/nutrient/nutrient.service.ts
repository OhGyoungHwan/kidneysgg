import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Nutrient, NutrientDocument } from 'src/schemas/nutrient.schema';

@Injectable()
export class NutrientService {
    constructor(@InjectModel(Nutrient.name) private nutrientModel: Model<NutrientDocument>) {}

    async readAll(): Promise<Nutrient[]> {
        return await this.nutrientModel.find().exec();
    }

    async readById(id: number): Promise<Nutrient> {
        return await this.nutrientModel.findOne({NO: id}).exec();
    }

    async readByQuery(name: string = '', kategorie: string = ''): Promise<Nutrient[]> {
        return await this.nutrientModel.find({
            식품명:{$regex: name, $options: 'i'},
            식품상세분류:{$regex: kategorie, $options: 'i'}
        }).exec();
    }

}
