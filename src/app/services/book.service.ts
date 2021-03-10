import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Book } from '../../assets/Book';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookUrl: string = 'http://private-anon-821c26d2f9-bookstore.apiary-mock.com/data/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }

  /*deleteBook(book:Book):Observable<Book>{
    const url = `${this.bookUrl}/${book.ISBN}`;
    return this.http.delete<Book>(url, httpOptions);
  }*/
    
}
