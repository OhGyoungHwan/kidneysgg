import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Board, BoardDocument } from 'src/schemas/Board.schema';

@Injectable()
export class BoardService {
    constructor(@InjectModel(Board.name) private boardModel: Model<BoardDocument>) {}

    async create(board: Board): Promise<Board> {
        const newBoard = new this.boardModel(board);
        return newBoard.save();
    }

    async readAll(): Promise<Board[]> {
        return await this.boardModel.find().exec();
    }

    async readByQuery(user: string = '', title: string = ''): Promise<Board[]> {
        return await this.boardModel.find({
            작성자:{$regex: user, $options: 'i'},
            제목:{$regex: title, $options: 'i'}
        }).exec();
    }

    async update(id, board: Board): Promise<Board> {
        return await this.boardModel.findByIdAndUpdate(id, board, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.boardModel.findByIdAndRemove(id);
    }

}
