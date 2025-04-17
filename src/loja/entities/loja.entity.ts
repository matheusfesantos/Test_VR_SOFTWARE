import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProdutoLoja } from '../../produtoloja/entities/produtoloja.entity';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @OneToMany(() => ProdutoLoja, (produtoLoja) => produtoLoja.loja)
  produtosLoja: ProdutoLoja[];
}