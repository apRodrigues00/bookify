import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface List {
  id_lista: string,
  usuario_id: string,
  nome_lista: string,
  quantidade_livros: number,
  data_criacao: string,
  contem_livro: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  getListsByUserIdWithHaveBook(userId: string, bookId: string): Observable<List[]> {
    const apiUrl = environment.APIURL + 'lists/' + userId + '/' + bookId;
    return this.http.get<List[]>(apiUrl);
  }

  getListsByUserId(userId: string): Observable<List[]> {
    const apiUrl = environment.APIURL + 'lists/' + userId;
    return this.http.get<List[]>(apiUrl);
  }

  addBookToList(idList: string, idBook: string): Observable<string> {
    const apiUrl = environment.APIURL + 'add-book-list';
    return this.http.post<string>(apiUrl, { idList, idBook });
  }

  createList(name: string, userId: number): Observable<List> {
    const apiUrl = environment.APIURL + 'create-list';
    return this.http.post<List>(apiUrl, { name, userId });
  }

  removeBookFromList(listId: string, bookId: string): Observable<string> {
    const apiUrl = environment.APIURL + 'lists/' + listId + '/' + bookId;
    return this.http.delete<string>(apiUrl);
  }


}
