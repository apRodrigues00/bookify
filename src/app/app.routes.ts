import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { ListsComponent } from './pages/lists/lists.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'livros', component: BooksComponent},
    { path: 'livros/:id', component: BookDetailsComponent},
    { path: 'listas', component: ListsComponent},
];
