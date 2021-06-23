import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Intervention } from '../../Intervention';
import {InterventionService} from '../../intervention.service';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent implements OnInit {

  //interventions: any;
  modalRef: BsModalRef;
interventions: Intervention[];
  intervention: Intervention;
  filteredInterventions: Intervention[] = new Array<Intervention>();
  searchByLieu: string;
  
  connectedUser: any;
  constructor(private interventionService: InterventionService, private router: Router, private modalService: BsModalService,    private userService: UserService){}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }



  ngOnInit() : void{
    this.getInterventions()
    };

    decline(): void {

      this.modalRef.hide();
    }
  
    private getInterventions(){
      this.interventionService.getInterventionsList().subscribe(data => {
        this.interventions = data;
      });
    }
  /*  deleteIntervention(id: number){
      this.interventionService.deleteIntervention(id).subscribe( data => {
        console.log(data);
        this.getInterventions();
      })
      
  
}
*/
deleteIntervention(id:number) {
  this.interventionService.deletepIntervention(id)
    .subscribe(
      data => {
        console.log(data);
      
        this.getInterventions();
        console.log('fff');
      },

      error => console.log(error));
 
  this.modalRef.hide();
}

get searchTermByLieu() :string  {
  return this.searchByLieu
   ;
}

set searchTermByLieu(value: string){
  this.searchByLieu = value;
  this.interventions = this.interventions.filter(intervention => intervention.lieu.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
getConnectedUser() {
  this.userService.getConnectedUser().subscribe(
    (user) => {
      this.connectedUser = user;
    }
  );
}


}

