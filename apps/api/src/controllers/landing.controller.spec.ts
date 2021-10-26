import { Test, TestingModule } from '@nestjs/testing';
// import { Chance } from 'chance';
import { LandingController } from './landing.controller';
// const chance = new Chance();

describe('LandingController', () => {
  let landingController: LandingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LandingController],
      providers: [],
    }).compile();

    landingController = app.get<LandingController>(LandingController);
  });

  describe('root', () => {
    it('should land the user', () => {
      expect(() => landingController.land()).not.toThrow();
    });
  });
});
