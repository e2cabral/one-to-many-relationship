import { User } from './../domain/user.model';

import { Controller, Get, Post, Put, Delete, HttpCode, Body, Param } from '@nestjs/common';
import { Car } from '../domain/car.model';
import { CarsService } from '../services/cars.service';
import { UserService } from '../services/users.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService, private userService: UserService) {}

  @Get(':userid')
  @HttpCode(200)
  async get(@Param('userid') userId: string): Promise<Array<Car>> {
    return await this.carsService.get(userId);
  }
  
  @Get(':userid/:id')
  @HttpCode(200)
  async getById(): Promise<Car> {
    return {} as Car;
  }

  @Post(':userid')
  @HttpCode(201)
  async save(@Body() car: Car, @Param('userid') userId: string): Promise<void> {
    let user;
    await this.userService
      .getById(userId)
      .then((res: User): User => user = res);
    await this.carsService.save(car, user);
  }

  @Put(':userid/:id')
  @HttpCode(204)
  async update(): Promise<void> {

  }

  @Delete(':userid/:id')
  @HttpCode(200)
  async delete(): Promise<void> {

  }
}
