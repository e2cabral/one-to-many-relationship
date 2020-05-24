import { User } from './user.model';
import { Document } from 'mongoose';

export interface Car extends Document {
  name: string;
  placa: string;
  user: string;
}