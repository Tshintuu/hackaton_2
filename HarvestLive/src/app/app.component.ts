import { Component } from '@angular/core';
import { HarvestServiceService } from './harvest-service.service';
import { Observation } from './observation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*public barley:Observation[];
  public barleyArray:Observation[]=[];

  constructor(public myService : HarvestServiceService){
    this.barley=[]
  }

   ngOnInit(){
     this.myService.getBarleyObservation().subscribe(
       (param_data:Observation[])=>{
        this.barley=param_data;
        console.log(this.barley)
       }
     )
   }*/



}
