import { IsString, IsOptional, IsNumber, IsDecimal } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  descricao: string;

  @IsOptional()
  @IsNumber()
  @IsDecimal()
  custo: number;

  @IsOptional()
  @IsString()
  imagem: string;
}