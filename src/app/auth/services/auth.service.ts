import {inject, Injectable} from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  http = inject(HttpClient)
  private baseUrl = 'http://localhost:9000/api/v1/auth';
  constructor() { }


  // Inscription
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user).pipe(
      tap((response: any) => {
        // Stocker les infos utilisateur dans localStorage après inscription
        localStorage.setItem('user', JSON.stringify(response));
      })
    );
  }

  // Connexion
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Stocker le token JWT dans localStorage après connexion
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response));

      })
    );
  }
  //Recuperation des informations utilisateur
  getCurrentUser(): any {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }


  // Récupérer le token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Ajouter le token dans les headers pour les requêtes protégées
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

}
