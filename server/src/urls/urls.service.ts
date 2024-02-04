import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

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

  async create(createUrlDto: CreateUrlDto) {

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

  findAll() {
    return `This action returns all urls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} url`;
  }
}
