import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Coordinates } from './coordinates';
import { Observation } from './observation';

@Injectable({
  providedIn: 'root'
})
export class HarvestServiceService {

  constructor(private myService: HttpClient) { }

  public getBarleyObservation():Observable<Observation[]>{
    const obs:Observable<any>=this.myService.get("https://api.capgrain.com/barley-observations");
    const treatment =(param_data:Observation[])=>{
      return param_data["hydra:member"] as Observation[];
      
    };
    return obs.pipe(map(treatment));
    
    
}
  
}

