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

@Index('fk_users_user_id_idx', ['userId'], {})
@Index('fk_books_liked_book_id_idx', ['likedBookId'], {})
@Entity('likes', { schema: 'Booksle' })
export class Likes {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'liked_book_id' })
  likedBookId: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @ManyToOne(() => Books, (books) => books.likes, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'liked_book_id', referencedColumnName: 'id' }])
  likedBook: Books;

  @ManyToOne(() => Users, (users) => users.likes, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
