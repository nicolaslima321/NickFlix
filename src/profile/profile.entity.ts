import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  plan: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  favouriteGenre: string;

  @Column({ nullable: true, type: 'varchar', length: 300 })
  preferenceGenres: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
