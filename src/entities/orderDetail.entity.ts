import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Books } from './books.entity';
import { Orders } from './orders.entity';

@Index('fk_order_detail_orders_id_idx', ['orderId'], {})
@Index('fk_order_detail_books_id_idx', ['bookId'], {})
@Entity('order_detail', { schema: 'Booksle' })
export class OrderDetail {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'book_id' })
  bookId: number;

  @Column('int', { name: 'order_id' })
  orderId: number;

  @Column('int', { name: 'qty' })
  qty: number;

  @ManyToOne(() => Books, (books) => books.orderDetails, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'book_id', referencedColumnName: 'id' }])
  book: Books;

  @ManyToOne(() => Orders, (orders) => orders.orderDetails, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'order_id', referencedColumnName: 'id' }])
  order: Orders;
}
