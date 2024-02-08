import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { Url } from './entities/url.entity';

import { RandomIdService } from '../utils/randomid.service'
import { ClicksModule } from 'src/clicks/clicks.module';
import { CaptchaService } from 'src/utils/captcha.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Url]),
    ClicksModule
  ],
  controllers: [
    UrlsController
  ],
  providers: [
    UrlsService,
    RandomIdService,
    CaptchaService
  ],
  exports: [
    UrlsService
  ]
})
export class UrlsModule {}
