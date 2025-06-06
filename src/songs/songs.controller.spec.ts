import { Test, TestingModule } from '@nestjs/testing';
import { SongController } from './songs.controller';

describe('SongsController', () => {
  let controller: SongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongController],
    }).compile();

    controller = module.get<SongController>(SongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
