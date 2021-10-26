import { Test, TestingModule } from '@nestjs/testing';
import { SomeappController } from './someapp.controller';
import { SomeappService } from './someapp.service';

describe('SomeappController', () => {
  let someappController: SomeappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SomeappController],
      providers: [SomeappService],
    }).compile();

    someappController = app.get<SomeappController>(SomeappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(someappController.getHello()).toBe('Hello World!');
    });
  });
});
