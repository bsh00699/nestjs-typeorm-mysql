import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number

  @Column({ unique: true, nullable: true })
  username: string

  @Column({ nullable: true })
  password: string

  @Column()
  createdAt: Date


  @Column({ nullable: true })
  authStrategy: Date

}