import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Coordinates } from './coordinates';
import { Observation } from './observation';

@Injectable({
  providedIn: 'root'
})
export class WheatHarvestService {

  constructor(private myService: HttpClient) { }

  public getWheatObservation():Observable<Observation[]>{
    const obs:Observable<any>=this.myService.get("https://api.capgrain.com/wheat-observations");
    const treatment =(param_data:Observation[])=>{
      return param_data["hydra:member"] as Observation[];
      
    };
    return obs.pipe(map(treatment));
    
    
}
addWheatObservation(data): Observable<any> {
  return this.myService.post<any>("https://api.capgrain.com/wheat-observations", data);
}
  
}

