import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LikesRepository } from './likes.repository';

@Injectable()
export class LikesService {
  constructor(private likesRepository: LikesRepository) {}

  async addLikes(bookId: number, userId: number): Promise<void> {
    return this.likesRepository.addLikes(bookId, userId);
  }

  async removeLikes(bookId: number, userId: number): Promise<void> {
    return this.likesRepository.removeLikes(bookId, userId);
  }
}
