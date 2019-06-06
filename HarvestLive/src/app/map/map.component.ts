import { Component, OnInit } from '@angular/core';
import { HarvestServiceService } from '../harvest-service.service';
import { CornHarvestService } from '../corn-harvest.service';
import { RapeseedHarvestService } from '../rapeseed-harvest.service';
import { SunflowerHarvestService } from '../sunflower-harvest.service';
import { WheatHarvestService } from '../wheat-harvest.service';
import { Observation } from '../observation';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  public myharvestMap;


  public barley: Observation[];
  public corn: Observation[];
  public rapeseed: Observation[];
  public sunflower: Observation[];
  public wheat: Observation[];

  constructor(
    public barleyService: HarvestServiceService,
    public cornService: CornHarvestService,
    public rapeseedService: RapeseedHarvestService,
    public sunflowerService: SunflowerHarvestService,
    public wheatService: WheatHarvestService
  ) {
    this.barley = [];
    this.corn = [];
    this.rapeseed = [];
    this.sunflower = [];
    this.wheat = [];
  }

  ngOnInit() {
    this.barleyService.getBarleyObservation().subscribe(
      (param_data: Observation[]) => {
        this.barley = param_data;
        for (let i = 0; i < this.barley.length; i++) {
          L.marker([this.barley[i].coordinates.latitude, this.barley[i].coordinates.longitude]).addTo(this.myharvestMap)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
        }
      }
    )
    this.cornService.getCornObservation().subscribe(
      (param_data: Observation[]) => {
        this.corn = param_data;
        for (let i = 0; i < this.corn.length; i++) {
          L.marker([this.corn[i].coordinates.latitude, this.corn[i].coordinates.longitude]).addTo(this.myharvestMap)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
        }
      }
    )
    this.rapeseedService.getRapeseedObservation().subscribe(
      (param_data: Observation[]) => {
        this.rapeseed = param_data;
        for (let i = 0; i < this.rapeseed.length; i++) {
          L.marker([this.rapeseed[i].coordinates.latitude, this.rapeseed[i].coordinates.longitude]).addTo(this.myharvestMap)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
        }
      }
    )
    this.sunflowerService.getSunflowerObservation().subscribe(
      (param_data: Observation[]) => {
        this.sunflower = param_data;
        for (let i = 0; i < this.barley.length; i++) {
          L.marker([this.sunflower[i].coordinates.latitude, this.sunflower[i].coordinates.longitude]).addTo(this.myharvestMap)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
        }
      }
    )
    this.wheatService.getWheatObservation().subscribe(
      (param_data: Observation[]) => {
        this.wheat = param_data;
        for (let i = 0; i < this.wheat.length; i++) {
          L.marker([this.wheat[i].coordinates.latitude, this.wheat[i].coordinates.longitude]).addTo(this.myharvestMap)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
        }
      }
    )
    this.myharvestMap = L.map('harvestMap').setView([47, 2], 6.4);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Harvest Map'

    }).addTo(this.myharvestMap);

  }

}
