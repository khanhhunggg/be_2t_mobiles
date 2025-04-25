// src/bank-accounts/entities/bank-account.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tbl_bank_accounts')
export class BankAccount {
  @PrimaryGeneratedColumn({ name: 'bank_account_id' })
  bankAccountId: number;

  @Column()
  bank_name: string;

  @Column({ unique: true })
  bank_number: string;

  @Column()
  user_bank_name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
