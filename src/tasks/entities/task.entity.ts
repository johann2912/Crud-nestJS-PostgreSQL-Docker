import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  test: string;
  @Column({
    nullable: true,
  })
  test1: string;

  @Column({ default: false })
  completed: boolean;
}
