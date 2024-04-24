import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { GoogleStrategy } from 'src/auth/google.strategy';
import { SessionSerializer } from 'src/auth/session.serializer';

@Module({
  imports: [MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ])],
  controllers: [UserController],
  providers: [UserService, GoogleStrategy, SessionSerializer],
})
export class UserModule {}
