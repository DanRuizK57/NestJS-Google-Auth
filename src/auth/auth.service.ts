import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
    constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async register(user: RegisterAuthDto) {
      
      let existingUser = await this.userModel.findOne({ email: user.email }).exec();
      if (!existingUser) {
        console.log("New user has been created: ", user);
      return this.userModel.create(user);
    }
    return user;
  }
}
