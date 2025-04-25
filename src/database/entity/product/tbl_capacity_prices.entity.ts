// src/capacity-prices/entities/capacity-price.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './tbl_products.entity';
import { Capacity } from './tbl_capacities.entity';

@Entity('tbl_capacity_prices')
@Unique(['product_id', 'capacity_id'])
export class CapacityPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;

  @ManyToOne(() => Product, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  capacity_id: number;

  @ManyToOne(() => Capacity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'capacity_id' })
  capacity: Capacity;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  discount_price: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0.0 })
  sale_price: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
