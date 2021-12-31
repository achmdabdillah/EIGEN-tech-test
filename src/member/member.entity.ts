import { MemberBook } from 'src/memberBook/memberBook.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @OneToMany(() => MemberBook, (member_books) => member_books.member)
  member_books: MemberBook[];
}
