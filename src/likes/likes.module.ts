import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { Likes } from 'src/entities/likes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesRepository } from './likes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Likes])],
  providers: [LikesService, LikesRepository],
  controllers: [LikesController],
})
export class LikesModule {}
