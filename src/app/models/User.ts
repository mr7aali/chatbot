import { Schema, model, models } from "mongoose";
import bcrypt from 'bcrypt'

const ChatBotSchema: Schema = new Schema({
  agent: {
    type: String,
    enum: ['ai', 'user'],
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});


const UserSchema = new Schema({

  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    validate: (password: string) => {
      if (!password.length || password.length < 8) {
        new Error('Password must be at least 8 characters');
        return false;
      }
    }
  },
  image: { type: String },
  phone: { type: String },
  streetAddress: { type: String },
  postalCode: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  isAdmin: { type: Boolean, default: false },
  ChatingWithSystem: {
    type: [ChatBotSchema],
    default: [],
  },
  
}, { timestamps: true });

UserSchema.post('validate', function (user) {
  const unHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(unHashedPassword, salt);
})

export const User = models?.User || model('User', UserSchema);


