import { Injectable } from '@nestjs/common';
import { Like } from './entities/like.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LikeService {
    constructor(@InjectRepository(Like) private likeRepository: Repository<Like>) { }
   
    async createLike(likeCreateDto: any, userId: number): Promise<Like> {
        const like = this.likeRepository.create({
            ...likeCreateDto,
            user_id: userId,
        });
        const savedLike = await this.likeRepository.save({
            ...like,
            user_id: userId,
        });
        return  savedLike;
    }
    async getLike(userId: number): Promise<Like[]> {
        const likes = await this.likeRepository.find({
            where :{user_id: userId},
            relations: ['user'],
        })
       return likes;
    }

}
