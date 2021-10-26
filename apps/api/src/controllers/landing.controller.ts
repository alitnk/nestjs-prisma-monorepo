import { Controller, Get, Render } from '@nestjs/common';

@Controller({ host: 'landing.localhost' })
export class LandingController {
  @Get()
  @Render('landing.liquid')
  land() {
    return {
      signedUpCount: 100,
    };
  }
}
