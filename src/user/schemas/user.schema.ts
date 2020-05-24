import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  cars: [{
    type: Schema.Types.ObjectId,
    ref: 'Car'
  }]
});