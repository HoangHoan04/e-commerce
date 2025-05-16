/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDTO } from './DTO/login.DTO';
import { RegisterDTO } from './DTO/register.DTO';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(DTO: RegisterDTO) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const hashed = await bcrypt.hash(DTO.password, 10);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
    const user = await this.userService.create({ ...DTO, password: hashed });
    return { message: 'User created successfully' };
  }

  async login(DTO: LoginDTO) {
    const user = await this.userService.findByEmail(DTO.email);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    if (!user || !(await bcrypt.compare(DTO.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { id: user.id, email: user.email };
    return { access_token: this.jwtService.sign(payload), user };
  }
}
