import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

import { NutrientController } from './nutrient/nutrient.controller';
import { DishController} from './dish/dish.controller';
import { DietController } from './diet/diet.controller';
import { BoardController } from './board/board.controller';

import { Nutrient, NutrientSchema } from './schemas/nutrient.schema';
import { Dish, DishSchema} from './schemas/dish.schema';
import { Diet, DietSchema} from './schemas/diet.schema';
import { User, UserSchema} from './schemas/user.schema';
import { Board, BoardSchema} from './schemas/board.schema';

import { NutrientService } from './nutrient/nutrient.service';
import { DishService} from './dish/dish.service'
import { DietService } from './diet/diet.service';
import { BoardService } from './board/board.service';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      {name: Nutrient.name, schema: NutrientSchema},
      {name: Dish.name, schema: DishSchema},
      {name: Diet.name, schema: DietSchema},
      {name: Board.name, schema: BoardSchema}
    ]),
  ],
  controllers: [
    AppController,
    NutrientController, 
    DishController, 
    DietController, 
    BoardController
  ],
  providers: [
    AppService,
    NutrientService, 
    DishService, 
    DietService, 
    BoardService
  ],
})
export class AppModule {}
