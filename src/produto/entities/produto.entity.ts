import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProdutoLoja } from '../../produtoloja/entities/produtoloja.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  descricao: string;

  @Column('decimal', { precision: 13, scale: 3, nullable: true })
  custo: number;

  @Column({ nullable: true })
  imagem: string;

  @OneToMany(() => ProdutoLoja, (pl) => pl.produto, { cascade: true })
  precos: ProdutoLoja[];
}