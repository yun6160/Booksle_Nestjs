import { Injectable } from '@nestjs/common';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  private categorys: Category[] = [];

  getAllCategory(): Category[] {
    return this.categorys;
  }
}
