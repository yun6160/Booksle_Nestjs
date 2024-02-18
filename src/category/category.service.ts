import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  getAllCategory(): Promise<Category[]> {
    return this.categoryRepository.getAllCategory();
  }
}
