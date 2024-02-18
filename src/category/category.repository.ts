import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(private dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }

  /**
   * 전체 카테고리 목록 불러오기
   * @returns category 목록 배열
   */
  async getAllCategory(): Promise<Category[]> {
    return await this.find();
  }
}
