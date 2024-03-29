import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateClickDto } from './dto/create-click.dto';
import { Click } from './entities/click.entity';
import { sourceMapsEnabled } from 'process';

@Injectable()
export class ClicksService {

  constructor(
    @InjectRepository(Click) private readonly  clickRepository: Repository<Click>
  ) {}

  async create(createClickDto: CreateClickDto) {
    const urlId = createClickDto.shortened.replace(process.env.HOST, ``);
    const newClick = this.clickRepository.create({ urlId });
    return await this.clickRepository.save(newClick);
  }

  async getClicksAndCounts(shortUrlId: string) {
    const [clicks, counts] = await this.clickRepository.findAndCount({ select: [`id`, `createdAt`], where: { urlId: shortUrlId } });
    return { clicks, counts };
  }
}
