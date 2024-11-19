import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  dateOfBirth: string;

  @Column()
  role: string;

  @Column({ type: 'date', nullable: true })
  createdAt: Date | null;

  @Column({ type: 'date', nullable: true })
  updatedAt: Date | null;

  @Column({ type: 'date', nullable: true })
  deletedAt: Date | null;

  @Column()
  active: boolean;

  @BeforeInsert()
  generateId() {
    this.id = nanoid();
  }
}
