import { forwardRef, Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
      TypeOrmModule.forFeature([Like]),
    ],
  controllers: [LikeController],
  providers: [LikeService]
})
export class LikeModule {}
