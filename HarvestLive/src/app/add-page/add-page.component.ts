import { Component, OnInit } from '@angular/core';
import { Observation } from '../observation';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HarvestServiceService} from '../harvest-service.service';
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

  public cultureType: string;
  
  constructor(
    public barleyService: HarvestServiceService,
    public cornService: CornHarvestService,
    public rapeseedService: RapeseedHarvestService,
    public sunflowerService: SunflowerHarvestService,
    public wheatService: WheatHarvestService
    ) { 
  }

  ngOnInit() {
  }
     
  onSubmit(value) {
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
        "latitude": value.latitude,
        "longitude": value.longitude
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
  

