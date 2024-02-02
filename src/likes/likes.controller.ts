import { Controller, Delete, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Post('/:bookid')
  addLikes(@Param('bookid') bookId: number) {
    return this.likesService.addLikes(bookId);
  }

  @Delete('/:bookid')
  removeLikes(@Param('bookid') bookId) {
    this.likesService.removeLikes(bookId);
  }
}
