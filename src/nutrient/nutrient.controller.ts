import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from "@nestjs/common";
import { NutrientService } from "src/nutrient/nutrient.service";
import { Nutrient } from "src/schemas/nutrient.schema";

@Controller('nutrient')
export class NutrientController {
    constructor(private readonly nutrientService: NutrientService){}

    @Get()
    async fetchAll(@Res() response) {
        const nutrients = await this.nutrientService.readAll();
        return response.status(HttpStatus.OK).json({
            nutrients
        })
    }

    @Get('/search')
    async findByQuery(@Res() response, @Query('name') name, @Query('kategorie') kategorie) {
        const nutrient = await this.nutrientService.readByQuery(name, kategorie);
        return response.status(HttpStatus.OK).json({
            nutrient
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id: number) {
        const nutrient = await this.nutrientService.readById(id);
        return response.status(HttpStatus.OK).json({
            nutrient
        })
    }

}
