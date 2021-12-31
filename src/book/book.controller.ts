import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { addBookDto, findBookDto } from './dto/book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return this.bookService.getAll();
  }

  @Get(':bookId')
  async getBookById(@Param('bookId') bookId: number): Promise<findBookDto> {
    return this.bookService.getBookById(bookId);
  }

  @Post()
  addBook(@Body() body: addBookDto): Promise<findBookDto> {
    return this.bookService.addBook(body);
  }
}
