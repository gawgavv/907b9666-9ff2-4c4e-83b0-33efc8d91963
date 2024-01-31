import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';

import { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: `postgres`,
      url: process.env.NODE_ENV === `production`? process.env.DB_PROD_URI : process.env.DB_DEV_URI,
      entities: [],
      logNotifications: true
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      socket: {
        host: `localhost`,
        port: 6379
      }
    })
  ]
})
export class AppModule {}
