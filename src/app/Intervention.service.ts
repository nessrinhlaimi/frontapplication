import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { TokenStorageService } from './services/token storage service';
import { Intervention } from './Intervention';


@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  

  private baseUrl = 'http://localhost:8080/api/auth/interventions';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
  }


  
  // createProbleme(probleme: Object): Observable<Object> {
  //console.log(sessionStorage.getItem('AuthUsername'))
  //return this.http.post(`${this.baseUrl}` + `/create`, probleme, {headers: new HttpHeaders({Authorization: sessionStorage.getItem('AuthToken')})});
  //}
 createIntervention(intervention: Object): Observable<Object> {
   console.log(JSON.stringify(intervention) + 'service');
    return this.http.post(`${this.baseUrl}` + `/create`, intervention,
      {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }

  //createIntervention(intervention): Observable<Object>  {
   
  //  return this.http.post
    //(this.baseUrl +'/create' , intervention,this.httpOptions);

   getInterventionsList(): Observable<any> {
      return this.http.get(`${this.baseUrl + `/all`}`,
        {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
    }
    deletepIntervention(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`,
      {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})}
      
      );
    }

   /* editIntervention(intervention): Observable<string> {
      return this.http.put<any>(this.baseUrl, intervention,
        {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
    }
    */

    
 
 
  getIntervention(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, 
      {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})}
    );
    
  }
  updateIntervention(intervention: Intervention): Observable<any>{
    return this.http.put<Intervention>(this.baseUrl+ "/" + intervention.id, intervention,
    {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }
 /* getIntervention(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/` + id,
      {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }
  */
  allInterventionUser(idUser: number): Observable<any> {
    console.log(this.tokenStorageService.getToken());
    return this.http.get<any>(this.baseUrl + '/byuser/' + idUser,
      {headers: new HttpHeaders({Authorization: this.tokenStorageService.getToken()})});
  }

  }




