import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token storage service';

const AUTH_API = 'http://localhost:8080/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api/auth/';
  constructor(private http: HttpClient,private token: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  logout() {

    this.token.signOut();
    window.location.replace('/login');
  }
  editProfile(user): Observable<string> {
    return this.http.put<any>(this.authUrl, user,
      {headers: new HttpHeaders({Authorization: this.token.getToken()})});
  }
}
