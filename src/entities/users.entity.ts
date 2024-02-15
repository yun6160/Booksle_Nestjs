import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Orders } from './orders.entity';
import { CartItems } from './cartItem.entity';
import { Likes } from './likes.entity';

@Index('email_UNIQUE', ['email'], { unique: true })
@Entity('users', { schema: 'Booksle' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', unique: true, length: 45 })
  email: string;

  @Column('varchar', { name: 'password', length: 45 })
  password: string;

  @Column('varchar', { name: 'salt', length: 255 })
  salt: string;

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];

  @OneToMany(() => CartItems, (cartItems) => cartItems.user)
  cartItems: CartItems[];

  @OneToMany(() => Likes, (likes) => likes.user)
  likes: Likes[];
}
