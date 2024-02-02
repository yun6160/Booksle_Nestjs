import { Injectable } from '@nestjs/common';
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

  removeLikes(bookId): void {
    this.likes = this.likes.filter((v) => v.liked_book_id !== bookId);
    console.log(this.likes);
  }
}
