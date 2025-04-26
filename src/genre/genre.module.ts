import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { Genre } from './entities/genry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  controllers: [GenreController],
  providers: [GenreService],
  exports: [GenreService] // để export nếu module khác cần dùng
})
export class GenreModule {}
