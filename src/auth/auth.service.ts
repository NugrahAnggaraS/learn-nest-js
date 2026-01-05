import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  login(email: string) {
    const user = this.usersService.findByEmail(email);
    return {
      message: 'Login success',
      user,
    };
  }
}
