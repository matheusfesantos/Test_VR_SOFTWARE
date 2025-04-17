import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProdutoLoja } from '../../produtoloja/entities/produtoloja.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  imagem: string;

  @Column('decimal')
  custo: number;

  @OneToMany(() => ProdutoLoja, (produtoLoja) => produtoLoja.produto)
  produtosLoja: ProdutoLoja[];
}