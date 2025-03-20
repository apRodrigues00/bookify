import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'userData';

  setUser(user: any) {
    this.saveToSessionStorage(user);
  }

  getUser() {
    return this.loadFromSessionStorage();
  }

  clearUser() {
    sessionStorage.removeItem(this.storageKey);
  }

  private saveToSessionStorage(user: any) {
    sessionStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  private loadFromSessionStorage(): any {
    const userData = sessionStorage.getItem(this.storageKey);
    return userData ? JSON.parse(userData) : null;
  }

}
