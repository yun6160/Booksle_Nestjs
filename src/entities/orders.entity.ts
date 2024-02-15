import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users.entity';
import { OrderDetail } from './orderDetail.entity';

@Index('fk_orders_users_id_idx', ['userId'], {})
@Entity('orders', { schema: 'Booksle' })
export class Orders {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'address', length: 500 })
  address: string;

  @Column('varchar', { name: 'receiver', length: 45 })
  receiver: string;

  @Column('varchar', { name: 'contact', length: 45 })
  contact: string;

  @Column('varchar', { name: 'book_title', length: 45 })
  bookTitle: string;

  @Column('int', { name: 'total_price' })
  totalPrice: number;

  @Column('int', { name: 'total_qty' })
  totalQty: number;

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date | null;

  @ManyToOne(() => Users, (users) => users.orders, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail[];
}
