import { Test, TestingModule } from '@nestjs/testing';
// import { Chance } from 'chance';
import { AppService } from '../services/app.service';
import { AppController } from './app.controller';
// const chance = new Chance();

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('shows home page', () => {
    it('should return "something"', () => {
      expect(typeof appController.home()).toBe('string');
    });
  });
});
