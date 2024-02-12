import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesDto } from './dto/likes.dto';

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Post('/:bookid')
  addLikes(@Param('bookid', ParseIntPipe) bookId: number) {
    return this.likesService.addLikes(bookId);
  }

  @Delete('/:bookid')
  removeLikes(
    @Param('bookid', ParseIntPipe) bookId,
    @Body() likeDto: LikesDto,
  ) {
    this.likesService.removeLikes(likeDto);
  }
}
