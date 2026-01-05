import { Controller, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { UsersService } from 'src/user/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user')
  getUser(@Req() req: Request, @Res() res: Response) {
    const email: string = (req.body?.email as string) ?? '';
    return res.status(201).json({
      data: this.usersService.findByEmail(email),
    });
  }
}
