import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Dish, DishDocument } from 'src/schemas/dish.schema';

@Injectable()
export class DishService {
    constructor(@InjectModel(Dish.name) private dishModel: Model<DishDocument>) {}

    async create(dish: Dish): Promise<Dish> {
        const newDish = new this.dishModel(dish);
        return newDish.save();
    }

    async readAll(): Promise<Dish[]> {
        return await this.dishModel.find().exec();
    }

    async readByQuery(name: string = '', user: string = ''): Promise<Dish[]> {
        return await this.dishModel.find({
            요리명:{$regex: name, $options: 'i'},
            작성자:{$regex: user, $options: 'i'}
        }).exec();
    }

    async update(id, dish: Dish): Promise<Dish> {
        return await this.dishModel.findByIdAndUpdate(id, dish, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.dishModel.findByIdAndRemove(id);
    }

}
