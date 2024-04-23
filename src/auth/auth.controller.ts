import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("/google")
  @UseGuards(AuthGuard('google'))
  async googleLogin(@Req() req): Promise<any> {
    const { user } = req.user;
    return this.authService.register(user);
  }

}
