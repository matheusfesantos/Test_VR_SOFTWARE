import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Injectable()
export class ProdutoService {
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  create(createProdutoDto: CreateProdutoDto) {
    throw new Error('Method not implemented.');
  }
}
