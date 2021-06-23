import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterventionService } from '../intervention.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  
  form: any = {};

  isSignUpFailed = false;
  errorMessage = '';


  private user: User;
  private userConnected: User;

  constructor(private authService: AuthService,
    private userService: UserService,
    private interventionService: InterventionService,

    private activatedRoute: ActivatedRoute,
    private router: Router) {

      this.activatedRoute.params.subscribe(params => {
        this.userService.getUserById(params['id']).subscribe(user => {
          this.user = user;
  
          this.form.name = this.user.name;
          this.form.lastname = this.user.lastname;
        
        });
  
  
      });
  
      this.userService.getConnectedUser().subscribe(
        (user) => {
          console.log(user);
          this.userConnected = user;
  
        }
      );





     }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.form);
    let userEdit = {
      id: this.user.id,
      name: this.form.name,
      lastname: this.form.lastname,
     
      password: this.form.password
    };
    console.log('userEdit :', userEdit);
    console.log('affichage form register :', this.form);
    this.authService.editProfile(userEdit).subscribe(
      data => {
        console.log(data);

        this.router.navigate(['/profile', this.user.id]);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
