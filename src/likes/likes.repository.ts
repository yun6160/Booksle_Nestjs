import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Likes } from 'src/entities/likes.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class LikesRepository extends Repository<Likes> {
  constructor(private dataSource: DataSource) {
    super(Likes, dataSource.createEntityManager());
  }

  /**
   * 좋아요 추가
   * @param bookId
   * @param userId
   */
  async addLikes(bookId: number, userId: number): Promise<void> {
    const like = this.create({
      userId: userId,
      likedBookId: bookId,
    });

    try {
      await this.insert(like);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  /**
   * 좋아요 삭제
   * @param bookId
   * @param userId
   */
  async removeLikes(bookId: number, userId: number): Promise<void> {
    const result = await this.delete({
      likedBookId: bookId,
      userId,
    });

    if (!result.affected) {
      throw new NotFoundException('삭제할 좋아요가 없습니다');
    }
  }
}
