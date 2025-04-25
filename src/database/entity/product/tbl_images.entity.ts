// src/images/entities/image.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ProductDetail } from './tbl_product_details.entity';

@Entity('tbl_images')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_detail_id: number;

  @ManyToOne(() => ProductDetail, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_detail_id' })
  productDetail: ProductDetail;

  @Column()
  image_url: string;

  @Column({ default: false })
  is_thumbnail: boolean;

  @Column({ default: 0 })
  sort_order: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
