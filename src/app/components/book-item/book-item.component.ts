import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Type,
} from '@angular/core';
import { Book } from '../../../assets/Book';
import { BookService } from '../../services/book.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() deleteBook: EventEmitter<Book> = new EventEmitter();
  updateTitle: string = '';
  updateAuthor: string = '';

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  onDelete(book) {
    this.deleteBook.emit(book);
  }
  onEdit(book) {
    if (this.updateTitle.length == 0) {
      book.author = this.updateAuthor;
    } else if (this.updateAuthor.length == 0) {
      book.title = this.updateTitle;
    } else {
      book.title = this.updateTitle;
      book.author = this.updateAuthor;
    }
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
