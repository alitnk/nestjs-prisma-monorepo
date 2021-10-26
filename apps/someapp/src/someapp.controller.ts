import { Controller, Get } from '@nestjs/common';
import { SomeappService } from './someapp.service';

@Controller()
export class SomeappController {
  constructor(private readonly someappService: SomeappService) {}

  @Get()
  getHello(): string {
    return this.someappService.getHello();
  }
}
