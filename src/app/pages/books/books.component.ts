import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  
  books: any[] = []; 

  constructor(private booksService: BooksService) { }

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
}
