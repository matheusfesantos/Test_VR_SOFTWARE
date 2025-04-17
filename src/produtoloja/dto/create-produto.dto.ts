import { IsNumber, IsDecimal } from 'class-validator';

export class CreateProdutoLojaDto {
  @IsNumber()
  produtoId: number;

  @IsNumber()
  lojaId: number;

  @IsDecimal()
  precoVenda: number;
}