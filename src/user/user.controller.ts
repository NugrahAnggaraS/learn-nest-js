import { Controller, Post, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import type { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user')
  getUser(@Req() req: Request, @Res() res: Response) {
    const email: string = (req.body?.email as string) ?? '';
    return res.status(201).json({
      data: this.usersService.findByEmail(email),
    });
  }
}
