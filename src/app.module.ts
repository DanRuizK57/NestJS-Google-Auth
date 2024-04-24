import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    PassportModule.register({session: true}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
