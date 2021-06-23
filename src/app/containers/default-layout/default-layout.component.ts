import { DOCUMENT } from '@angular/common';
import {Component, Inject, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token storage service';
import { UserService } from '../../services/user.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public sidebarMinimized = false;
  public navItems = navItems;
  private changes: MutationObserver;
  public element: HTMLElement;
  username: any;
  user: any;
  intervalNotification: any;
  constructor(private router: Router,private userService: UserService ,private  token:TokenStorageService,@Inject(DOCUMENT) _document?: any
  ) {
    this.userService.getConnectedUser().subscribe(value => {
      this.username = value.name + ' ' + value.lastname;
    });
    

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

    this.userService.getConnectedUser().subscribe(
      (user) => {
        console.log(user);
        this.user = user;
        if (this.user.roles[0].name === 'ROLE_admin') {
          this.router.navigate(['/']);
        }
      }
    );
  }
  logout(){
   // this.token.signOut();
   window.location.replace('/login');
   localStorage.clear();
    this.token.signOut();
  }

toggleMinimize(e) {
  this.sidebarMinimized = e;
}
redirectProfile(): void {
  this.router.navigate(['profile',this.user.id]);
}

ngOnDestroy(): void {
  this.changes.disconnect();
  this.clearIntervalStorage();
}
clearIntervalStorage() {
  
  clearInterval(this.intervalNotification);
}


  
}
