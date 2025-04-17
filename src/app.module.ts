import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ProdutoModule } from './produto/produto.module';
import { LojaModule } from './loja/loja.module';
import { ProdutolojaModule } from './produtoloja/produtoloja.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProdutoModule,
    LojaModule,
    ProdutolojaModule,
  ],
})
export class AppModule {}
