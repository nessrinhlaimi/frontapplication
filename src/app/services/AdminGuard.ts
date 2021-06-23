import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { TokenStorageService } from './token storage service';

import {UserService} from './user.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user: any;

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private userService: UserService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!localStorage.getItem(TOKEN_KEY)) {
      localStorage.setItem('redirectURL',state.url);
      this.router.navigate(['/login']);
      return false;
    }

    return true;
    // return this.authService.isLoggedIn;
  }
}
