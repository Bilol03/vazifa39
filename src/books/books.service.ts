import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';


export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  isPublished: boolean;
}

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  create(dto: CreateBookDto) {
    const newBook: Book = {
      id: this.idCounter++,
      ...dto,
      isPublished: dto.isPublished ?? false,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books
  }

  findOne(id: number): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }



  remove(id: number): void {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) throw new NotFoundException('Book not found');
    this.books.splice(index, 1);
  }
}
