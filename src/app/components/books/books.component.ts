import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../../../assets/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[];
  closeResult = '';
  title: string;
  author: string;
  addBook: Book;

  constructor(
    private bookService: BookService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
      console.log(this.books);
    });
  }

  deleteBook(book: Book) {
    //Remove From UI
    if (confirm('Are you sure you want to delete this book?')) {
      this.books = this.books.filter((b) => b.ISBN !== book.ISBN);
    }
    //Remove From Server
    //this.bookService.deleteBook(book).subscribe();
    // change
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onSubmit() {
    title: this.title;
    author: this.author;
    this.addBook = new Book(this.title, this.author);
    this.books.unshift(this.addBook);
    console.log(this.addBook);
  }
}
