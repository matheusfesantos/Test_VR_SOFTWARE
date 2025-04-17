import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loja } from './entities/loja.entity';
import { CreateLojaDto } from './dto/create-loja.dto';

@Injectable()
export class LojaService {
  constructor(
    @InjectRepository(Loja)
    private readonly lojaRepository: Repository<Loja>,
  ) {}

  create(createLojaDto: CreateLojaDto): Promise<Loja> {
    const loja = this.lojaRepository.create(createLojaDto);
    return this.lojaRepository.save(loja) as Promise<Loja>;
  }

  findAll(): Promise<Loja[]> {
    return this.lojaRepository.find();
  }

  findOne(id: number): Promise<Loja> {
    return this.lojaRepository.findOneBy({ id }) as Promise<Loja>;
  }
}