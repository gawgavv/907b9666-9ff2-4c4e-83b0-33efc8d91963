import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { instanceToPlain } from 'class-transformer'

import { Url } from './entities/url.entity';
import { CreateUrlDto } from './dto/create-url.dto';

import { RandomIdService } from 'src/utils/randomid.service';
import { ClicksService } from 'src/clicks/clicks.service';

@Injectable()
export class UrlsService {

  constructor(
    @InjectRepository(Url) private readonly urlRepository: Repository<Url>,
    private readonly randomIdService: RandomIdService,
    private readonly clicksService: ClicksService
  ) {}

  async create(createUrlDto: CreateUrlDto): Promise<{ shortened: string }> {

    let checkId = true;
    let shortId = this.randomIdService.getRandomId(7);
    while(checkId) { // This loop performs a checking to check whether the generated id already exists in database.
      
      const urlId = await this.urlRepository.findOneBy({ id: shortId });
      if(!urlId) {
        checkId = false;
      } else {
        shortId = this.randomIdService.getRandomId(7);
      }
    }

    const newShortUrl = this.urlRepository.create({ ...createUrlDto, id: shortId });
    const { id } = await this.urlRepository.save(newShortUrl);
    return { shortened: process.env.HOST + `/` + id }
  }

  async findOne(id: string): Promise<{ origin: string }> {
    return await this.urlRepository.findOne({
      select: [`origin`],
      where: {
        id
      }
    });
  }

  async totalClicks(shortUrlId: string) {
    return await this.clicksService.findAll(shortUrlId);
  }
}
