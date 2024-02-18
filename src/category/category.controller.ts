import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAllCategory(): Promise<Category[]> {
    return this.categoryService.getAllCategory();
  }
}
