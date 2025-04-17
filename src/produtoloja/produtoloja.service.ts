import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateProdutoLojaDto } from './dto/create-produto.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutolojaService {
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  create(createProdutoLojaDto: CreateProdutoLojaDto) {
    throw new Error('Method not implemented.');
  }
}

@Controller('produtolojas')
export default class ProdutoLojaController {
  constructor(private readonly produtolojaService: ProdutolojaService) {}

  @Post()
  create(@Body() createProdutoLojaDto: CreateProdutoLojaDto) {
    return this.produtolojaService.create(createProdutoLojaDto);
  }

  @Get()
  findAll() {
    return this.produtolojaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtolojaService.findOne(+id);
  }
}