import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Diet, DietDocument } from 'src/schemas/diet.schema';

@Injectable()
export class DietService {
    constructor(@InjectModel(Diet.name) private dietModel: Model<DietDocument>) {}

    async create(diet: Diet): Promise<Diet> {
        const newDiet = new this.dietModel(diet);
        return newDiet.save();
    }

    async readAll(): Promise<Diet[]> {
        return await this.dietModel.find().exec();
    }

    async readByQuery(user: string = ''): Promise<Diet[]> {
        return await this.dietModel.find({
            작성자:{$regex: user, $options: 'i'}
        }).exec();
    }

    async update(id, diet: Diet): Promise<Diet> {
        return await this.dietModel.findByIdAndUpdate(id, diet, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.dietModel.findByIdAndRemove(id);
    }

}
