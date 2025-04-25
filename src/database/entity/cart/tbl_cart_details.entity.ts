// src/cart-details/entities/cart-detail.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Cart } from './tbl_carts.entity';
import { ProductDetail } from '../product/tbl_product_details.entity';

@Entity('tbl_cart_details')
export class CartDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cart_id: number;

  @ManyToOne(() => Cart, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;

  @Column()
  product_detail_id: number;

  @ManyToOne(() => ProductDetail, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_detail_id' })
  productDetail: ProductDetail;

  @Column()
  quantity: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
