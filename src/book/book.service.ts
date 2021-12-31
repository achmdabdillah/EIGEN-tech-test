import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { addBookDto, updateBookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  getAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async getBookById(id: number): Promise<Book> {
    try {
      const book = await this.booksRepository.findOneOrFail(id);
      return book;
    } catch (error) {
      throw error;
    }
  }

  addBook(payload: addBookDto): Promise<Book> {
    const newBook = this.booksRepository.create(payload);

    return this.booksRepository.save(newBook);
  }

  async updateBook(payload: updateBookDto): Promise<Book> {
    const { id, author, stock, title } = payload;
    const book = await this.getBookById(id);

    book.author = author;
    book.stock = stock;
    book.title = title;
    return this.booksRepository.save(book);
  }

  async deleteBook(id: number): Promise<Book> {
    const book = await this.getBookById(id);

    return this.booksRepository.remove(book);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
