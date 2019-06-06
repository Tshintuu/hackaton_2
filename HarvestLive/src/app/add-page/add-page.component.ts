import { Component, OnInit } from '@angular/core';
import { Observation } from '../observation';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HarvestServiceService} from '../harvest-service.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  constructor(public barleyService: HarvestServiceService) { 
  }

  ngOnInit() {
  }
     
  onSubmit(value) {
    let jsonObject = {
      "specificWeight" : value.specificWeight,
      "email" : value.email,
      "phone" : value.phone,
      "variety": value.variety,
      "yield": value.yield,
      "humidity": value.humidity,
      "yieldNotation": value.yieldNotation,
      "nitrogenQuantityUsed": value.nitrogenQtUsed,
      "nitrogenProductUsed": value.nitrogenPrdUsed,
      "comment": value.comment,
      "cultivationMethod": value.cultivMethod,
      "targetPrice": value.targetPrice,
      "place": value.place,
      "coordinates": {
        "latitude": value.latitude,
        "longitude": value.longitude
      } 
    }
    console.log(jsonObject);
    this.barleyService.submitForm(jsonObject).subscribe(); 
 }
}
  

