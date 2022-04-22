import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from "@nestjs/common";
import { DishService } from "src/dish/dish.service";
import { Dish } from "src/schemas/dish.schema";

@Controller('dish')
export class DishController {
    constructor(private readonly dishService: DishService){}

    @Get()
    async fetchAll(@Res() response) {
        const dishs = await this.dishService.readAll();
        return response.status(HttpStatus.OK).json({
            dishs
        })
    }

    @Get('/search')
    async findByQuery(@Res() response, @Query('name') name, @Query('user') user) {
        const dish = await this.dishService.readByQuery(name, user);
        return response.status(HttpStatus.OK).json({
            dish
        })
    }

    @Post()
    async createDish(@Res() response, @Body() dish: Dish) {
        const newdish = await this.dishService.create(dish);
        return response.status(HttpStatus.CREATED).json({
            newdish
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() dish: Dish) {
        const updatedDish = await this.dishService.update(id, dish);
        return response.status(HttpStatus.OK).json({
            updatedDish
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deleteddish = await this.dishService.delete(id);
        return response.status(HttpStatus.OK).json({
            deleteddish
        })
    }

}
