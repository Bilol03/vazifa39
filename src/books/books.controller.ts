import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { YearRangePipe } from './pipes/year-range.pipe';
import { BooleanTransformPipe } from './pipes/boolean-transform.pipe';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.remove(id);
  }

  @Get('checkPublish/published')
  getByPublished(@Query('isPublished', BooleanTransformPipe) isPublished: boolean) {
    return {
      message: `isPublished is a boolean: ${isPublished}`,
      type: typeof isPublished,
    };
  }
}
