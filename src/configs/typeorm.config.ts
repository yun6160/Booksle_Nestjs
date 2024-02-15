import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'Booksle',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  autoLoadEntities: true,
  logging: true,
};
