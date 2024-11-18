import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('developers')
export class Developer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: string;

  @BeforeInsert()
  /**
   * Generate a unique id for the developer.
   * The id is in the format of dev_<nanoid>
   */
  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}
