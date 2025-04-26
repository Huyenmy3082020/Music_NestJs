import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
// import { UserModule } from './user/user.module';
 import { AuthModule } from './auth/auth.module';
// import { SongsModule } from './songs/songs.module';
// import { GenreController } from './genre/genre.controller';
// import { GenreModule } from './genre/genre.module';
// import { PlaylistModule } from './playlist/playlist.module';
// import { PlaylistsongService } from './playlistsong/playlistsong.service';
// import { PlaylistsongController } from './playlistsong/playlistsong.controller';
// import { LikeModule } from './like/like.module';
// import { SubscriptionsModule } from './subscriptions/subscriptions.module';
// import { PlaylistsongModule } from './playlistsong/playlistsong.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
// UserModule,
     AuthModule,
//     PlaylistsongModule,
//     SongsModule,
//     GenreModule,
//     PlaylistModule,
//     LikeModule,
//     SubscriptionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}