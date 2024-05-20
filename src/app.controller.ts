import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckTokenExpiryGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Ruta protegida por sesión
  @Get("/hola")
  @UseGuards(CheckTokenExpiryGuard)
  getHola(): string {
    return this.appService.getHello();
  }
}
