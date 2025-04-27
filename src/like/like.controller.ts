import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LikeCreateDto } from './dto/create_likedto';
import { AuthGuard } from 'src/auth/auth.guard';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
        constructor(   private readonly likeService: LikeService,) { 
        
    } 

    @UseGuards(AuthGuard)
    @Post('create')
    async createLike(@Body() likeCreateDto: LikeCreateDto, @Req() req: any) {
        const userId = req.user_data.id;
        const data = await this.likeService.createLike(likeCreateDto, userId);
        return data;
    }

    @UseGuards(AuthGuard)
    @Get('getLike')
    async getLike( @Req() req: any) {
        const userId = req.user_data.id;
        const data = await this.likeService.getLike(userId);
        return data;
    }
}
