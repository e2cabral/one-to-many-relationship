import { User } from './../domain/user.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Car } from '../domain/car.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel('Car') private readonly car: Model<Car>,
    @InjectModel('User') private readonly user: Model<User>
  ) {}

  async get(id: string): Promise<Array<Car>> {
    return await this.car.find({ 'user': id}).populate('user');
  }

  async getById(id: string | number): Promise<Car> {
    return await this.car.findOne({ _id: id }).populate('user');
  }

  async save(car: Car, user: User): Promise<void> {
    await new this.car(car)
      .save()
      .then(async (c) => {
        user.cars.push(c._id);
        await this.user.updateOne({ _id: user._id}, user);
      })
  }

  async update(car: Car, id: string): Promise<void> {
    await this.car.updateOne({ _id: id }, car);
  }

  async delete(id: string): Promise<void> {
    this.car.deleteOne({ _id: id });
  }
}
