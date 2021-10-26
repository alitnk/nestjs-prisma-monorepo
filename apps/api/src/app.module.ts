import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { DateScalar } from '@acme/core';
import config from './configs/config';
import { GraphqlConfig, PrismaConfig } from './configs/config.interface';
import { AppController } from './controllers/app.controller';
import { LandingController } from './controllers/landing.controller';
import { PrismaModule } from '@acme/prisma';
import { AppResolver } from './resolvers/app.resolver';
import { AuthModule } from './resolvers/auth/auth.module';
import { PostModule } from './resolvers/post/post.module';
import { UserModule } from './resolvers/user/user.module';
import { AppService } from './services/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: async (configService: ConfigService) => {
        return {
          prismaOptions: await configService.get<PrismaConfig>('prisma'),
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [LandingController, AppController],
  providers: [AppService, AppResolver, DateScalar],
})
export class AppModule {}
