import { Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('categories')
export class Category {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}