import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';

import { AppController } from './app.controller';

import { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';

import { UrlsModule } from './urls/urls.module';
import { ClicksModule } from './clicks/clicks.module';
import { Url } from './urls/entities/url.entity';
import { Click } from './clicks/entities/click.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: `postgres`,
      url: process.env.NODE_ENV === `production`? process.env.DB_PROD_URI : process.env.DB_DEV_URI,
      entities: [Url, Click],
      synchronize: true,
      logging: true
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      socket: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT
      }
    }),
    UrlsModule,
    ClicksModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule {}
