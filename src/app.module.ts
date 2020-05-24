import { CarsService } from './user/services/cars.service';
import { CarsController } from './user/controllers/cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/users.module';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/relationdb')
  ],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule {}
