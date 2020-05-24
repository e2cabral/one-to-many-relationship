import { User } from '../domain/user.model';
import { UserService } from '../services/users.service';
import { Controller, Get, Post, Body, Put, Delete, Param, Inject, HttpCode } from '@nestjs/common';
import { Car } from '../domain/car.model';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {

  }

  @Get()
  @HttpCode(200)
  async get(): Promise<Array<User>> {
    return await this.userService.get();
  }

  @Get(':id')
  @HttpCode(200)
  async getById(@Param('id') id: string | number): Promise<User> {
    return await this.userService.getById(id);
  }

  @Post()
  @HttpCode(201)
  async save(@Body() user: User): Promise<void> {
    await this.userService.save(user);
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: string | number, @Body() user: User): Promise<void> {
    await this.userService.update(user, id)
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string | number): Promise<void> {
    await this.userService.delete(id);
  }
}
