import { User } from '../domain/user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from '../domain/car.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly user: Model<User>) {}

  async get(): Promise<Array<User>> {
    return await this.user.find().populate('cars');
  }

  async getById(id: string | number): Promise<User> {
    return await this.user.findById(id);
  }

  async save(user: User): Promise<void> {
    await new this.user(user).save();
  }

  async update(user: User, id: string | number): Promise<void> {
    await this.user.update({ _id: id }, user);
  }

  async delete(id: string | number): Promise<void> {
    await this.user.deleteOne({ _id: id });
  }
}
