// src/payments/entities/payment.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Invoice } from './tbl_invoices.entity';

@Entity('tbl_payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoice_id: number;

  @ManyToOne(() => Invoice, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: ['Cash', 'Bank Transfer', 'Credit Card'],
    nullable: true,
  })
  method: 'Cash' | 'Bank Transfer' | 'Credit Card';

  @Column({ nullable: true })
  transaction_code: string;

  @Column({
    type: 'enum',
    enum: ['Pending', 'Completed', 'Failed'],
    nullable: true,
  })
  status: 'Pending' | 'Completed' | 'Failed';

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
