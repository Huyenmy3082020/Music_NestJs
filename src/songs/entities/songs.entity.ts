import { Genre } from 'src/genre/entities/genry.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column({ nullable: true })
  album: string;

  @Column({ nullable: true })
  imageUrl: string; 

  @ManyToOne(() => Genre, { nullable: true })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;

  @Column('int')
  duration: number; 

  @Column()
  fileUrl: string; 

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
