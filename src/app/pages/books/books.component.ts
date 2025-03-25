import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BooksService, Livro } from '../../services/books/books.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  
  books: any[] = []; 

  constructor(
    private booksService: BooksService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        console.error('Erro ao buscar os livros:', err);
      }
    });
  }

  return() {
    this.location.back();
  }

  showBook(book: Livro) {
    this.router.navigate(['/livros', book.id_livro])
  }
}
