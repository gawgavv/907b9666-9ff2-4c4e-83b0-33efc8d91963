import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';

import { UrlsService } from './urls.service';

import { CreateUrlDto } from './dto/create-url.dto';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  async generateNewShortUrl(@Body() createUrlDto: CreateUrlDto) {
    return await this.urlsService.create(createUrlDto);
  }

  @SkipThrottle()
  @Get(':id')
  shortUrlTotalClicks(@Param('id') id: string) {
    return this.urlsService.findOne(id);
  }
}
