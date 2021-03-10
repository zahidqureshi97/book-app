import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../assets/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;
  @Output() deleteBook: EventEmitter<Book> = new EventEmitter();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  onDelete(book){
      this.deleteBook.emit(book);
    }
}
