// src/products/entities/product.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Provider } from '../user/tbl_providers.entity';

export enum ProductStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

@Entity('tbl_products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  model: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  warranty_period: number;

  @Column({ nullable: true })
  release_year: number;

  @Column({ default: false })
  is_featured: boolean;

  @Column({
    type: 'enum',
    enum: ProductStatus,
    default: ProductStatus.ACTIVE,
  })
  status: ProductStatus;

  @Column({ nullable: true })
  provider_id: number;

  @ManyToOne(() => Provider, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
