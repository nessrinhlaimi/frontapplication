import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  users: any;
  searchUser: any;
  defaultUser: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getintervenantBoard().subscribe(
      data => {
        this.users = data;
        this.defaultUser = data;
        console.log(data);
      },
      error => {
      }
    );

  }
  
  searchUserValue() {
    this.users = this.defaultUser;
    if (this.searchUser !== '') {
      this.users = this.users.filter(value => value.name.indexOf(this.searchUser)> -1);
    }
  }
  
  

  changeStatus(user) {
    if (user.enabled) {

      this.userService.disableBoard(user).subscribe(
        data => {
          this.ngOnInit();
        },
        error => {
        }
      );
    } else {
      this.userService.enabledBoard(user).subscribe(
        data => {
          this.ngOnInit();
        },
        error => {
        }
      );
    }
  }

  }


