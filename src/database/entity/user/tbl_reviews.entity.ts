// src/reviews/entities/review.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './tbl_users.entity';
import { ProductDetail } from '../product/tbl_product_details.entity';

@Entity('tbl_reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  product_detail_id: number;

  @ManyToOne(() => ProductDetail, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_detail_id' })
  productDetail: ProductDetail;

  @Column('tinyint')
  rating: number;

  @Column('text', { nullable: true })
  comment: string;

  @Column({ default: false })
  is_verified: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
