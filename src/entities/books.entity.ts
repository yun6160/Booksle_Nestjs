import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItems } from './cartItem.entity';
import { Category } from './category.entity';
import { OrderDetail } from './orderDetail.entity';
import { Likes } from './likes.entity';

@Index('isbn_UNIQUE', ['isbn'], { unique: true })
@Index('fk_category_category_id_idx', ['categoryId'], {})
@Entity('books', { schema: 'Booksle' })
export class Books {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'img' })
  img: number;

  @Column('int', { name: 'category_id' })
  categoryId: number;

  @Column('int', { name: 'pages' })
  pages: number;

  @Column('int', { name: 'price' })
  price: number;

  @Column('varchar', { name: 'title', length: 45 })
  title: string;

  @Column('varchar', { name: 'form', nullable: true, length: 45 })
  form: string | null;

  @Column('varchar', { name: 'isbn', unique: true, length: 45 })
  isbn: string;

  @Column('longtext', { name: 'detail', nullable: true })
  detail: string | null;

  @Column('varchar', { name: 'author', nullable: true, length: 45 })
  author: string | null;

  @Column('longtext', { name: 'contents', nullable: true })
  contents: string | null;

  @Column('date', { name: 'pub_date' })
  pubDate: string;

  @Column('longtext', { name: 'summary' })
  summary: string;

  @OneToMany(() => CartItems, (cartItems) => cartItems.book)
  cartItems: CartItems[];

  @ManyToOne(() => Category, (category) => category.books, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'id' }])
  category: Category;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.book)
  orderDetails: OrderDetail[];

  @OneToMany(() => Likes, (likes) => likes.likedBook)
  likes: Likes[];
}
