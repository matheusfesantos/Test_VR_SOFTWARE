import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { Loja } from '../../loja/entities/loja.entity';

@Entity()
export class ProdutoLoja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  precoVenda: number;

  @ManyToOne(() => Produto, (produto) => produto.produtosLoja)
  produto: Produto;

  @ManyToOne(() => Loja, (loja) => loja.produtosLoja)
  loja: Loja;
}