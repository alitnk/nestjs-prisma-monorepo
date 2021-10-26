import { Module } from '@nestjs/common';
import { SomeappController } from './someapp.controller';
import { SomeappService } from './someapp.service';

@Module({
  imports: [],
  controllers: [SomeappController],
  providers: [SomeappService],
})
export class SomeappModule {}
