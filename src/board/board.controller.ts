import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from "@nestjs/common";
import { BoardService } from "src/board/board.service";
import { Board } from "src/schemas/Board.schema";

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService){}

    @Get()
    async fetchAll(@Res() response) {
        const boards = await this.boardService.readAll();
        return response.status(HttpStatus.OK).json({
            boards
        })
    }

    @Get('/search')
    async findByQuery(@Res() response, @Query('user') user, @Query('title') title) {
        const board = await this.boardService.readByQuery(user, title);
        return response.status(HttpStatus.OK).json({
            board
        })
    }

    @Post()
    async createboard(@Res() response, @Body() board: Board) {
        const newboard = await this.boardService.create(board);
        return response.status(HttpStatus.CREATED).json({
            newboard
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() board: Board) {
        const updatedboard = await this.boardService.update(id, board);
        return response.status(HttpStatus.OK).json({
            updatedboard
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedboard = await this.boardService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedboard
        })
    }

}
