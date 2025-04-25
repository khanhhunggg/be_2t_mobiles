// src/product-details/entities/product-detail.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './tbl_products.entity';
import { Color } from './tbl_colors.entity';
import { Capacity } from './tbl_capacities.entity';

@Entity('tbl_product_details')
export class ProductDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;

  @ManyToOne(() => Product, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column({ nullable: true })
  color_id: number;

  @ManyToOne(() => Color, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'color_id' })
  color: Color;

  @Column({ nullable: true })
  capacity_id: number;

  @ManyToOne(() => Capacity, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'capacity_id' })
  capacity: Capacity;

  @Column({ default: 0 })
  stock_quantity: number;

  @Column({ nullable: true })
  serial_number: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
