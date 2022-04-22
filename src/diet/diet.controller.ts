import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from "@nestjs/common";
import { DietService } from "src/diet/diet.service";
import { Diet } from "src/schemas/diet.schema";

@Controller('diet')
export class DietController {
    constructor(private readonly dietService: DietService){}

    @Get()
    async fetchAll(@Res() response) {
        const diets = await this.dietService.readAll();
        return response.status(HttpStatus.OK).json({
            diets
        })
    }

    @Get('/search')
    async findByQuery(@Res() response, @Query('user') user) {
        const diet = await this.dietService.readByQuery(user);
        return response.status(HttpStatus.OK).json({
            diet
        })
    }

    @Post()
    async creatediet(@Res() response, @Body() diet: Diet) {
        const newdiet = await this.dietService.create(diet);
        return response.status(HttpStatus.CREATED).json({
            newdiet
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() diet: Diet) {
        const updateddiet = await this.dietService.update(id, diet);
        return response.status(HttpStatus.OK).json({
            updateddiet
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deleteddiet = await this.dietService.delete(id);
        return response.status(HttpStatus.OK).json({
            deleteddiet
        })
    }

}
