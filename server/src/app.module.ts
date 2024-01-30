import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: `postgres`,
      url: process.env.NODE_ENV === `production`? process.env.DB_PROD_URI : process.env.DB_DEV_URI,
      entities: [],
      logNotifications: true
    })
  ]
})
export class AppModule {}
