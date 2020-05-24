import { Document } from 'mongoose';
import { Car } from './car.model';

export interface User extends Document {
  id: string | number,
  name: string;
  email: string;
  password: string;
  cars: Array<string>;
}