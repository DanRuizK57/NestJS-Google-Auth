import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    UserModule,
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRESQL_HOST,
        port: +process.env.POSTGRESQL_PORT,
        username: process.env.POSTGRESQL_USERNAME,
        password: process.env.POSTGRESQL_PASSWORD,
        database: process.env.POSTGRESQL_DB_NAME,
        // Ingresar entidades creadas
        entities: [],
        // No se debe usar en producción, se pueden perder datos.
        synchronize: true,
      })
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
