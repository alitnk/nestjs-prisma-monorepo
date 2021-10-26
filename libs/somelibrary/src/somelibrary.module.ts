import { Module } from '@nestjs/common';
import { SomelibraryService } from './somelibrary.service';

@Module({
  providers: [SomelibraryService],
  exports: [SomelibraryService],
})
export class SomelibraryModule {}
