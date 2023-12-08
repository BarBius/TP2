import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  public authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  login(username: string, password: string): boolean {
    if (username === 'Toto' && password === 'Tutu') {
      this.isAuthenticated = true;
      this.authChanged.emit(true); 
    } else {
      this.isAuthenticated = false;
      this.authChanged.emit(false); 
    }
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.authChanged.emit(false); \
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

