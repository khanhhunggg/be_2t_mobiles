// src/specs/entities/spec.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from './tbl_products.entity';

@Entity('tbl_specs')
export class Spec {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;

  @ManyToOne(() => Product, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column({ nullable: true })
  screen_size: string;

  @Column({ nullable: true })
  resolution: string;

  @Column({ nullable: true })
  chipset: string;

  @Column({ nullable: true })
  ram: string;

  @Column({ nullable: true })
  os: string;

  @Column({ nullable: true })
  battery_capacity: string;

  @Column({ nullable: true })
  charging_tech: string;
}
