import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', // será 'db' quando usar Docker
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'desafio',
  autoLoadEntities: true,
  synchronize: false, // deixe false, pois vamos usar migrations
};