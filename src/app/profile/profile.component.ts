import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterventionService } from '../intervention.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {




  private allintervention: any;
  private user: User;
  private userConnected: User;
  constructor(private userService: UserService,  private interventionService:InterventionService, private activatedRoute: ActivatedRoute) { 



    this.activatedRoute.params.subscribe(params => {
      this.userService.getUserById(params['id']).subscribe(user => {
        this.user = user;
        this.interventionService.allInterventionUser(this.user.id).subscribe(valueinterventions => {
          this.allintervention = valueinterventions;
          console.log(this.allintervention);
        
      });
      this.userService.getConnectedUser().subscribe(
        (user) => {
          console.log(user);
          this.userConnected = user;
  
        }
      );
  

    });
  });

    
  
  } 

  ngOnInit(){
  }
  
}