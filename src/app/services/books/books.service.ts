import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface Livro {
  id_livro: string;
  titulo: string;
  capa_url: string;
  genero: string;
  ano_publicacao: string;
  autor_nome: string;
  pais_origem: string;
  nascimento: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Livro[]> {
    const apiUrl = environment.APIURL + 'books';
    return this.http.get<Livro[]>(apiUrl);
  }
}
