import { DatePipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Intervention } from '../../Intervention';
import { InterventionService } from '../../intervention.service';
import * as moment from 'moment';

@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent  implements OnInit{
 
  id:number;
  intervention: Intervention;
  editForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute,private interventionService: InterventionService,
    private router: Router,   private datepipe:DatePipe)
  {
    this.activatedRoute.params.subscribe(params => this.id = params.id); 
   }
   ngOnInit() {
    this.editForm = this.formBuilder.group({
      date: ['', Validators.required],
      structure: ['', Validators.required],
      lieu: ['', Validators.required],
     
      observation: ['', Validators.required],
    })
   
   this.interventionService.getIntervention(this.id).subscribe(
    data => {
      const intervention = data[0];
      this.intervention = intervention;
      this.editForm.patchValue({
        date: intervention.date,
        lieu: intervention.lieu,
        structure: intervention.structure,
        observation: intervention.observation
      });
      })
    }
  
   
    onSubmit(){
    //  this.editForm.value['date'] = new DatePipe('en-US').transform(this.editForm.value['date'], 'dd/MM/yyyy');
    this.intervention.date = this.editForm.value['date'];
    this.intervention.lieu = this.editForm.value['lieu'];
    this.intervention.structure = this.editForm.value['structure'];
    this.intervention.observation = this.editForm.value['observation'];
       this.interventionService.updateIntervention(this.intervention).subscribe(
         data => this.router.navigate(['/base/tables'])
       )
     }

 
}

