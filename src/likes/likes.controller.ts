import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Post('/:bookid')
  addLikes(
    @Param('bookid', ParseIntPipe) bookId: number,
    @Body('user_id') user_Id: number,
  ): Promise<void> {
    return this.likesService.addLikes(bookId, user_Id);
  }

  @Delete('/:bookid')
  removeLikes(
    @Param('bookid', ParseIntPipe) bookId: number,
    @Body('user_id') user_Id: number,
  ): Promise<void> {
    return this.likesService.removeLikes(bookId, user_Id);
  }
}
