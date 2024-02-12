import { Injectable, NotFoundException } from '@nestjs/common';
import { Likes } from './likes.model';

@Injectable()
export class LikesService {
  private likes: Likes[] = [];

  addLikes(bookId: number) {
    const like: Likes = {
      user_id: 10,
      liked_book_id: bookId,
    };
    this.likes.push(like);
    return this.likes;
  }

  removeLikes(likeDto): void {
    const found = this.likes.filter(
      (v) => v.liked_book_id == likeDto.book_id && v.user_id == likeDto.user_id,
    );
    if (!found.length) {
      throw new NotFoundException('좋아요 기록을 찾을 수 없습니다');
    } else {
      this.likes = this.likes.filter(
        (v) =>
          v.liked_book_id == likeDto.book_id && v.user_id == likeDto.user_id,
      );
    }
  }
}
