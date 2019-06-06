import { Component, OnInit } from '@angular/core';
import { HarvestServiceService} from '../harvest-service.service';
import { GeoApiService } from '../geo-api.service'

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  constructor(public barleyService: HarvestServiceService, 
              public geoService: GeoApiService) {}

  public retrievePos: string;

  ngOnInit() {
    this.geoService.getPosition(28240,'Manou').subscribe(
      (param:string) => {
        this.retrievePos=param;
        console.log(this.retrievePos)
      }
    );
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
  

