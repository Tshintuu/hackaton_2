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
          L.marker([this.barley[i].coordinates.latitude, this.barley[i].coordinates.longitude], {icon: greenIcon}).addTo(this.myharvestMap)
          .bindPopup('Orge, variété : '+this.barley[i].variety)
          .openPopup();
        }
      }
    )
    this.cornService.getCornObservation().subscribe(
      (param_data: Observation[]) => {
        this.corn = param_data;
        for (let i = 0; i < this.corn.length; i++) {
          L.marker([this.corn[i].coordinates.latitude, this.corn[i].coordinates.longitude],  {icon: redIcon}).addTo(this.myharvestMap)
          .bindPopup('Maïs, variété : '+this.corn[i].variety)
          .openPopup();
        }
      }
    )
    this.rapeseedService.getRapeseedObservation().subscribe(
      (param_data: Observation[]) => {
        this.rapeseed = param_data;
        for (let i = 0; i < this.rapeseed.length; i++) {
          L.marker([this.rapeseed[i].coordinates.latitude, this.rapeseed[i].coordinates.longitude], {icon: yellowIcon}).addTo(this.myharvestMap)
          .bindPopup('Colza, variété : '+this.rapeseed[i].variety)
          .openPopup();
        }
      }
    )
    this.sunflowerService.getSunflowerObservation().subscribe(
      (param_data: Observation[]) => {
        this.sunflower = param_data;
        for (let i = 0; i < this.sunflower.length; i++) {
          L.marker([this.sunflower[i].coordinates.latitude, this.sunflower[i].coordinates.longitude], {icon: blackIcon}).addTo(this.myharvestMap)
          .bindPopup('Tournesol, variété : '+this.sunflower[i].variety)
          .openPopup();
        }
      }
    )
    this.wheatService.getWheatObservation().subscribe(
      (param_data: Observation[]) => {
        this.wheat = param_data;
        for (let i = 0; i < this.wheat.length; i++) {
          L.marker([this.wheat[i].coordinates.latitude, this.wheat[i].coordinates.longitude]).addTo(this.myharvestMap)
          .bindPopup('Blé, variété : '+this.wheat[i].variety)
          .openPopup();
        }
      }
    )

    let greenIcon = L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    let redIcon = L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    let yellowIcon = L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    let blackIcon = L.icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });



    this.myharvestMap = L.map('harvestMap').setView([47, 2], 6.4);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Harvest Map'

    }).addTo(this.myharvestMap);

  }

}
