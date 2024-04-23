import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("/google")
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<any> {
    return HttpStatus.OK;
  }

}
