import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Books } from './books.entity';

@Index('name_UNIQUE', ['categoryName'], { unique: true })
@Entity('category', { schema: 'Booksle' })
export class Category {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'category_name', unique: true, length: 100 })
  categoryName: string;

  @OneToMany(() => Books, (books) => books.category)
  books: Books[];
}
