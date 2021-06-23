import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { TokenStorageService } from './token storage service';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private usersUrl = 'http://localhost:8080/api/auth/users';
 private usersEnableuserUrl = 'http://localhost:8080/api/auth/enableuser';
 private usersDisableuserUrl = 'http://localhost:8080/api/auth/disableuser';
  constructor(private http: HttpClient,
    private tokenStorageService: TokenStorageService) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/auth/' + id,
      {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }
  getConnectedUser(): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/auth/get_connected_user',
      {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }
 
  
  getintervenantBoard(): Observable<any> {
    return this.http.get(this.usersUrl, {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }
  enabledBoard(user): Observable<any> {
    return this.http.put(this.usersEnableuserUrl + '/' + user.id, null, {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }
  disableBoard(user): Observable<any> {
    return this.http.put(this.usersDisableuserUrl + '/' + user.id, null, {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }

}
