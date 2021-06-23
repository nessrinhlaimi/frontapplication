import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Intervention } from '../../Intervention';
import {InterventionService} from '../../intervention.service';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent implements OnInit{
  intervention: Intervention = new Intervention();
  submitted = false;
  
  valeur = '';
  dropdownSettings = {};
  modalRef: BsModalRef;
  @ViewChild('template') private template;
  constructor(private interventionService: InterventionService, private modalService: BsModalService) { }
 
  openModal(template: TemplateRef<any>) {
  
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  decline(): void {
    this.modalRef.hide();
  }

  
  
  ngOnInit(){
  this. dropdownSettings = {};
    
  }


  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  
  newIntervention(): void {
    this.submitted = false;
    this.intervention = new Intervention();
  }
  save() {
    console.log(this.interventionService + 'maaaaaaaaaaaher')
    this.interventionService.createIntervention(this.intervention)
   
      .subscribe(data => {
        console.log(data);
        if (data != null) {

          this.openModal(this.template);

        }
      
      }, error => console.log(error));
   // this.intervention = new Intervention();
  }
  onSubmit() {

    this.submitted = true;
    this.save();

  }

  choisirLogiciel(event, logiciel) {
    if (this.intervention.interv ) {
      this.intervention.interv = this.intervention.interv +''+logiciel 
    }
    else{
      this.intervention.interv=logiciel}
    }
  }
  


