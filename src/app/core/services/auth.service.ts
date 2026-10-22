
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  expiresInMinutes: number;
}

debugger
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient); 
  private apiUrl = environment.authApiUrl;

  login(request: LoginRequest): Observable<LoginResponse> {
    debugger
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, request)
      .pipe(
        tap(response => {
          localStorage.setItem(
            'access_token',
            response.accessToken
          );
        })
      );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}
