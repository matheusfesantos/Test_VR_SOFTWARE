import { IsString } from 'class-validator';

export class CreateLojaDto {
  @IsString()
  descricao: string;
}