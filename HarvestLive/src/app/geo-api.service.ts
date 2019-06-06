import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  private service: HttpClient;
  constructor(param: HttpClient) {
    this.service = param;
  }

  public getPosition(code:Number,nom:String): Observable<any> {
    const obs:Observable<any>=this.service.get("https://geo.api.gouv.fr/communes?codePostal="+code+"&nom="+nom+"&fields=&format=geojson&geometry=centre");
    const treatment =(param_data:any)=>{
      return param_data.features[0].geometry.coordinates;
    };
    return obs.pipe(map(treatment));
  }
}
