import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { Loja } from '../../loja/entities/loja.entity';

@Entity()
@Unique(['produto', 'loja']) // só 1 preço por loja
export class ProdutoLoja {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produto, (produto) => produto.precos, { onDelete: 'CASCADE' })
  produto: Produto;

  @ManyToOne(() => Loja, (loja) => loja.precos)
  loja: Loja;

  @Column('decimal', { precision: 13, scale: 3 })
  precoVenda: number;
}