import { Component } from '@angular/core';
import { BooksService, Livro } from '../../services/books/books.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { List, ListsService } from '../../services/lists/lists.service';
import { UserService } from '../../services/users/users.service';
import { Location } from '@angular/common';
import { NewListComponent } from "../../components/new-list/new-list.component";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NewListComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book!: Livro;
  lists: List[] | null = null;
  isLoadingBooks: boolean = true;
  isLoadingLists: boolean = true;
  isVisiblePopup: boolean = false;
  user: any;

  constructor(
    private bookService: BooksService,
    private listService: ListsService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUser();

    if (bookId) {
      this.loadBooks(bookId);
      this.loadLists(bookId);
    }
  }

  loadBooks(bookId: string) {
    this.bookService.getBookById(bookId).subscribe({
      next: (response) => {
        this.book = response;
        this.isLoadingBooks = false;
      },
      error: (err) => console.error(err)
    });
  }

  loadLists(bookId: string) {
    this.listService.getListsByUserIdWithHaveBook(this.user.id, bookId).subscribe({
      next: (response) => {
        this.lists = response
        this.isLoadingLists = false;
      },
      error: (err) => console.error(err)
    });
  }

  return() {
    this.location.back();
  }

  showPopup() {
    this.isVisiblePopup = !this.isVisiblePopup;
  }

  closePopup(newList: boolean) {
    this.isVisiblePopup = !this.isVisiblePopup;
    if (newList) this.loadLists(this.book.id_livro);
  }


  addBook(list: List) {
    this.listService.addBookToList(list.id_lista, this.book.id_livro).subscribe({
      next: (response) => {
        alert(`"${this.book.titulo}" adicionado com sucesso na lista "${list.nome_lista}"!`);
        this.loadLists(this.book.id_livro);
      },
      error: (err) => {
        console.error('Erro ao adicionar o livro na lista:', err);
      }
    });
  }

  removeBook(list: List) {
    this.listService.removeBookFromList(list.id_lista, this.book.id_livro).subscribe({
      next: (response) => {
        alert(`"${this.book.titulo}" removido com sucesso da lista "${list.nome_lista}"!`);
        this.loadLists(this.book.id_livro);
      },
      error: (err) => {
        console.error('Erro ao adicionar o livro na lista:', err);
      }
    });
  }

}
