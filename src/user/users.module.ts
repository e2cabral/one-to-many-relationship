import { UserService } from './services/users.service';
import { UserController } from './controllers/users.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { CarSchema } from './schemas/car.schema';
import { CarsController } from './controllers/cars.controller';
import { CarsService } from './services/cars.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'User', schema: UserSchema },
			{ name: 'Car', schema: CarSchema },
		])
	],
	controllers: [
		UserController,
		CarsController,
	],
	providers: [
		UserService,
		CarsService,
	],
})
export class UserModule { }
