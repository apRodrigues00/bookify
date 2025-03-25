import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor (
    private router: Router
  ) {}

  showBooks() {
    this.router.navigate(['/livros']);
  }

  showLists() {
    this.router.navigate(['/listas']);
  }
}
