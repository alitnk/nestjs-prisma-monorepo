import { Test, TestingModule } from '@nestjs/testing';
import { SomelibraryService } from './somelibrary.service';

describe('SomelibraryService', () => {
  let service: SomelibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomelibraryService],
    }).compile();

    service = module.get<SomelibraryService>(SomelibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
