/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './DTO/login.DTO';
import { RegisterDTO } from './DTO/register.DTO';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() DTO: RegisterDTO) {
    return this.authService.register(DTO);
  }
  @Post('login')
  login(@Body() DTO: LoginDTO) {
    return this.authService.login(DTO);
  }
}
