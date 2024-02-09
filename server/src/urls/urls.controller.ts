import { Controller, Get, Post, Body, Param, Put, HttpException } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';

import { UrlsService } from './urls.service';
import { CaptchaService } from 'src/utils/captcha.service';

import { CreateUrlDto } from './dto/create-url.dto';

@Controller('urls')
export class UrlsController {
  constructor(
    private readonly urlsService: UrlsService,
    private readonly captchaService: CaptchaService
    ) {}

  @Post()
  async generateNewShortUrl(@Body() createUrlDto: CreateUrlDto & { captchaValue: string }) {
    const isCaptchaValid = await this.captchaService.verifCaptcha(createUrlDto.captchaValue);
    if(!isCaptchaValid) throw new HttpException(`We suspect that you may be a bot`, 403);
    console.log(isCaptchaValid);
    return await this.urlsService.create(createUrlDto);
  }

  @SkipThrottle()
  @Get(':id')
  shortUrlTotalClicks(@Param('id') shortUrlId: string) {
    return this.urlsService.totalClicks(shortUrlId);
  }
}
