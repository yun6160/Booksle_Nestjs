import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { CartsModule } from './carts/carts.module';
import { CategoryModule } from './category/category.module';
import { LikesModule } from './likes/likes.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UsersModule,
    BooksModule,
    CartsModule,
    CategoryModule,
    LikesModule,
    OrdersModule,
  ],
})
export class AppModule {}
