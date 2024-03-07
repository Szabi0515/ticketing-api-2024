import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getPerosnalizedHello(name: string, day: string): string {
    return 'Hello ${name}, have a nice ${day}!';
  }
}
