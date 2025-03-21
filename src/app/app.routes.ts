import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'livros', component: BooksComponent},
];
