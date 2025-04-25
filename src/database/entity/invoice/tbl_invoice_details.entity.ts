// src/invoice-details/entities/invoice-detail.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Invoice } from './tbl_invoices.entity';
import { ProductDetail } from '../product/tbl_product_details.entity';

@Entity('tbl_invoice_details')
export class InvoiceDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoice_id: number;

  @ManyToOne(() => Invoice, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;

  @Column()
  product_detail_id: number;

  @ManyToOne(() => ProductDetail, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_detail_id' })
  productDetail: ProductDetail;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
