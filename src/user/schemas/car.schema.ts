import { Schema } from 'mongoose';

export const CarSchema = new Schema({
  name: String,
  placa: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});