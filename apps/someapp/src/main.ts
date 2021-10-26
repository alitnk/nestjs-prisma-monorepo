import { NestFactory } from '@nestjs/core';
import { SomeappModule } from './someapp.module';

async function bootstrap() {
  const app = await NestFactory.create(SomeappModule);
  await app.listen(3000);
}
bootstrap();
