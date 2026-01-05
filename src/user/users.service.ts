import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findByEmail(email: string) {
    return {
      id: 1,
      email,
      role: 'admin',
    };
  }
}
