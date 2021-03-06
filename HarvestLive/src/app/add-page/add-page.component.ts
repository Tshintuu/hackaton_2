import { Component, OnInit } from '@angular/core';
import { HarvestServiceService} from '../harvest-service.service';
import { GeoApiService } from '../geo-api.service'
import { CornHarvestService } from '../corn-harvest.service';
import { RapeseedHarvestService } from '../rapeseed-harvest.service';
import { SunflowerHarvestService } from '../sunflower-harvest.service';
import { WheatHarvestService } from '../wheat-harvest.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  public retrievePos: string[];
  public cultureType: string;
  
  constructor(public barleyService: HarvestServiceService, 
              public geoService: GeoApiService, 
              public cornService: CornHarvestService,
              public rapeseedService: RapeseedHarvestService,
              public sunflowerService: SunflowerHarvestService,
              public wheatService: WheatHarvestService) {
                this.retrievePos = [];
              }


  ngOnInit() {
    
  }
     
  onSubmit(value) {
    this.geoService.getPosition(parseInt(value.zipCode),value.place).subscribe(
      (param:string[]) => {
        this.retrievePos=param;
        console.log(this.retrievePos)
      }
    );
    let jsonObject = {
      "specificWeight" : value.specificWeight,
      "protein" : value.protein,
      "fallingNumber" : value.fallingNumber,
      "email" : value.email,
      "phone" : value.phone,
      "variety": value.variety,
      "yield": value.yield,
      "humidity": value.humidity,
      "yieldNotation": parseInt(value.yieldNotation),
      "nitrogenQuantityUsed": value.nitrogenQtUsed,
      "nitrogenProductUsed": value.nitrogenPrdUsed,
      "comment": value.comment,
      "cultivationMethod": value.cultivMethod,
      "targetPrice": value.targetPrice,
      "place": value.place,
      "coordinates": {
        "latitude": this.retrievePos[1],
        "longitude": this.retrievePos[0]
      } 
    }
    switch(value.cultureType) {
      case 'Orge':
        this.barleyService.addBarleyObservation(jsonObject).subscribe();
        break;
      case 'Mais':
        this.cornService.addCornObservation(jsonObject).subscribe();
        break;
      case 'Colza':
        this.rapeseedService.addRapeseedObservation(jsonObject).subscribe();
        break;
      case 'Tournesol':
        this.sunflowerService.addSunflowerObservation(jsonObject).subscribe();
        break;
      case 'Ble':
        this.wheatService.addWheatObservation(jsonObject).subscribe();
        break;
    } 
 }
}
  

