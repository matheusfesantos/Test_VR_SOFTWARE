import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module';
import { LojaModule } from './loja/loja.module';
import { ProdutolojaModule } from './produtoloja/produtoloja.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // carrega o .env

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // variável de ambiente do Railway
      autoLoadEntities: true,
      synchronize: true,
    }),

    ProdutoModule,
    LojaModule,
    ProdutolojaModule,
  ],
})
export class AppModule {}