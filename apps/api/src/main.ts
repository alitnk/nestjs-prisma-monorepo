import { PrismaClientExceptionFilter } from '@acme/prisma';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Liquid } from 'liquidjs';
import { liquidColorFilters } from 'liquidjs-color-filters';
import { join } from 'path';
import { AppModule } from './app.module';
import {
  CorsConfig,
  NestConfig,
  SwaggerConfig,
} from './configs/config.interface';

// Liquid Engine
const liquidEngine = new Liquid();
liquidEngine.plugin(liquidColorFilters);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Templating Engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.engine('liquid', liquidEngine.express());
  app.setViewEngine('liquid');

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Filters - NOTE: Filters should be ordered from the most generic to the most specific
  // const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    // Prisma Client Exception Filter for unhandled exceptions
    new PrismaClientExceptionFilter(),
  );

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  // Swagger Api
  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'Nestjs')
      .setDescription(swaggerConfig.description || 'The nestjs API description')
      .setVersion(swaggerConfig.version || '1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
  }

  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }

  await app.listen(process.env.PORT || nestConfig.port || 3000);
}
bootstrap();
