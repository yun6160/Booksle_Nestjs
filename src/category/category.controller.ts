import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getAllCategory(): Category[] {
    return this.categoryService.getAllCategory();
  }
}
