// src/capacities/entities/capacity.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum CapacityUnit {
  MB = 'MB',
  GB = 'GB',
  TB = 'TB',
}

@Entity('tbl_capacities')
export class Capacity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column({
    type: 'enum',
    enum: CapacityUnit,
    default: CapacityUnit.GB,
  })
  unit: CapacityUnit;

  @Column({ nullable: true })
  display_name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
