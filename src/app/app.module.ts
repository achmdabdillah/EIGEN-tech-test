import { Module } from '@nestjs/common';
import { BookModule } from 'src/book/book.module';
import { MemberModule } from 'src/member/member.module';

@Module({
  imports: [BookModule, MemberModule],
})
export class AppModule {}
