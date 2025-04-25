// src/warehouse/entities/warehouse.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductDetail } from '../product/tbl_product_details.entity';

@Entity('tbl_warehouse')
export class Warehouse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_detail_id: number;

  @ManyToOne(() => ProductDetail, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_detail_id' })
  productDetail: ProductDetail;

  @Column('int', { default: 0 })
  stock_quantity: number;

  @Column('timestamp', { nullable: true })
  last_imported_at: Date;

  @Column('timestamp', { nullable: true })
  last_exported_at: Date;

  @Column('text', { nullable: true })
  note: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
