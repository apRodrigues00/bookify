import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string): Observable<any> {
    const apiUrl = environment.APIURL + 'login';
    return this.http.post<any>(apiUrl, { email });
  }
}
