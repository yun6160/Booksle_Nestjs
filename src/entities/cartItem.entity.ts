import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Books } from './books.entity';
import { Users } from './users.entity';

@Index('book_id_idx', ['bookId'], {})
@Index('userId_idx', ['userId'], {})
@Entity('cartItems', { schema: 'Booksle' })
export class CartItems {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'book_id' })
  bookId: number;

  @Column('int', { name: 'qty', default: () => "'1'" })
  qty: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @ManyToOne(() => Books, (books) => books.cartItems, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'book_id', referencedColumnName: 'id' }])
  book: Books;

  @ManyToOne(() => Users, (users) => users.cartItems, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
