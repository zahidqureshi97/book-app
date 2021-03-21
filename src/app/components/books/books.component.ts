import { Component, OnInit } from '@angular/core';
import { Book } from '../../../assets/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
      this.bookService.getBooks().subscribe(books =>{
        this.books = books;
        console.log(this.books);
      })
    }

    deleteBook(book:Book){
      //Remove From UI
      this.books = this.books.filter(b => b.ISBN !== book.ISBN);
      console.log("Book deleted");
      //Remove From Server
      //this.bookService.deleteBook(book).subscribe();
    }

    addBook(book:Book){
      this.books.push(book);
      console.log(book);
      
      
    /*this.bookService.addBook(book).subscribe(book =>{
        
      })*/
    }
    
}

