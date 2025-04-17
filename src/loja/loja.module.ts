import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LojaService } from './loja.service';
import { LojaController } from './loja.controller';
import { Loja } from './entities/loja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loja])], // Registra o repositório
  controllers: [LojaController],
  providers: [LojaService],
  exports: [LojaService],
})
export class LojaModule {}
