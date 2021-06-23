import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private router: Router) { }

  signOut() {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

 // public getToken(): string | null {
   // return window.localStorage.getItem(TOKEN_KEY);
  //}
  public getToken(): string {
    // hethi zda tbedlet
    //aa w affichage 3andi mochkla
    if (!localStorage.getItem(TOKEN_KEY)) {
      this.router.navigate(['/login']);
      return null;
    }
    return 'Bearer ' + localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
  
}