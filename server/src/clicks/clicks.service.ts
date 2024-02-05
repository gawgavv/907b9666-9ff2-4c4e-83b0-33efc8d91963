import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { CreateClickDto } from './dto/create-click.dto';
import { Click } from './entities/click.entity';

@Injectable()
export class ClicksService {

  constructor(
    @InjectRepository(Click) private readonly  clickRepository: Repository<Click>
  ) {}

  async create(createClickDto: CreateClickDto) {
    const newClick = this.clickRepository.create(createClickDto);
    return await this.clickRepository.save(newClick);
  }

  findAll() {
    return `This action returns all clicks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} click`;
  }
}
