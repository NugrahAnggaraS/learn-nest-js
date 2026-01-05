import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';

export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    if (req.method === 'GET') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
  }
}
