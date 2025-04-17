import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  precos: number;
}