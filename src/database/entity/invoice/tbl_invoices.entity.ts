// src/invoices/entities/invoice.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/tbl_users.entity';

@Entity('tbl_invoices')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  user_id: number;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  customer_id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customer_id' })
  customer: User;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column({
    type: 'enum',
    enum: ['Cash', 'Bank Transfer', 'Credit Card'],
    nullable: true,
  })
  payment_method: 'Cash' | 'Bank Transfer' | 'Credit Card';

  @Column({
    type: 'enum',
    enum: ['Pending', 'Paid', 'Cancelled'],
    default: 'Pending',
  })
  status: 'Pending' | 'Paid' | 'Cancelled';

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
