// src/user-information/entities/user-information.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BankAccount } from './tbl_bank_accounts.entity';
import { User } from './tbl_users.entity';

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

@Entity('tbl_user_information')
export class UserInformation {
  @PrimaryGeneratedColumn({ name: 'information_id' })
  informationId: number;

  @Column({ nullable: true })
  bank_account_id: number;

  @ManyToOne(() => BankAccount, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'bank_account_id' })
  bankAccount: BankAccount;

  @Column({ nullable: true })
  avatar: string;

  @Column()
  full_name: string;

  @Column('text')
  address: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender: Gender;

  @Column({ type: 'date', nullable: true })
  birthday: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => User, (user) => user.information)
  users: User[];
}
