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

  create(createClickDto: CreateClickDto) {
    return 'This action adds a new click';
  }

  findAll() {
    return `This action returns all clicks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} click`;
  }
}
