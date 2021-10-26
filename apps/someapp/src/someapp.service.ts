import { Injectable } from '@nestjs/common';

@Injectable()
export class SomeappService {
  getHello(): string {
    return 'Hello World!';
  }
}
