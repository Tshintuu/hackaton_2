import { Component, OnInit, OnChanges } from '@angular/core';
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
export class MapComponent implements OnInit, OnChanges {


  public myharvestMap;


  public barley: Observation[];
  public corn: Observation[];
  public rapeseed: Observation[];
  public sunflower: Observation[];
  public wheat: Observation[];
  public barleyMarkers: L.Marker[];
  public cornMarker: L.Marker[];
  private layer: L.Layer;
  public curr: boolean
  public cornCategory: boolean
  public otherCurr: boolean
  public rapeseedCategory: boolean
  public rapeseedMarker: L.Marker[];
  public sunflowerCategory: boolean
  public sunflowerMarker: L.Marker[];
  public wheatCategory: boolean;
  public wheatMarker: L.Marker[];



  constructor(
    public barleyService: HarvestServiceService,
    public cornService: CornHarvestService,
    public rapeseedService: RapeseedHarvestService,
    public sunflowerService: SunflowerHarvestService,
    public wheatService: WheatHarvestService,

  ) {
    this.barley = [];
    this.corn = [];
    this.rapeseed = [];
    this.sunflower = [];
    this.wheat = [];
    this.curr = true;
    this.cornCategory = true;
    this.cornMarker = [];
    this.barleyMarkers = [];
    this.rapeseedCategory = true;
    this.rapeseedMarker = [];
    this.sunflowerCategory = true;
    this.sunflowerMarker = [];
    this.wheatCategory = true;
    this.wheatMarker = [];
  }
  displayCounter(count: boolean) {
    this.curr = count;
    this.refresh();
  }

  displayCorn(count: boolean) {
    this.cornCategory = count;
    this.refresh();
  }

  displayRapeseed(count: boolean) {
    this.rapeseedCategory = count;
    this.refresh();
  }

  displaySunflower(count: boolean) {
    this.sunflowerCategory = count;
    this.refresh();
  }

  displayWheat(count: boolean) {
    this.wheatCategory = count;
    this.refresh();
  }

  refresh(): void {


    if (this.curr) {
      for (let i: number = 0; i < this.barleyMarkers.length; i++) {
        this.barleyMarkers[i].addTo(this.myharvestMap)
          .bindPopup('Orge, variété : ' + this.barley[i].variety)
          .openPopup();
      }
    }
    else {
      for (let i: number = 0; i < this.barleyMarkers.length; i++) {
        this.barleyMarkers[i].removeFrom(this.myharvestMap);
      }
    }
    if (this.cornCategory) {
      for (let j = 0; j < this.cornMarker.length; j++) {
        this.cornMarker[j].addTo(this.myharvestMap)
          .bindPopup('Maïs, variété : ' + this.corn[j].variety)
          .openPopup();
      }
    } else {
      for (let j = 0; j < this.cornMarker.length; j++) {
        this.cornMarker[j].removeFrom(this.myharvestMap)
      }
    }
    if (this.rapeseedCategory) {
      for (let j = 0; j < this.rapeseedMarker.length; j++) {
        this.rapeseedMarker[j].addTo(this.myharvestMap)
          .bindPopup('Colza, variété : ' + this.rapeseed[j].variety)
          .openPopup();
      }
    } else {
      for (let j = 0; j < this.rapeseedMarker.length; j++) {
        this.rapeseedMarker[j].removeFrom(this.myharvestMap)
      }
    }
    if (this.sunflowerCategory) {
      for (let j = 0; j < this.sunflowerMarker.length; j++) {
        this.sunflowerMarker[j].addTo(this.myharvestMap)
          .bindPopup('Tournesol, variété : ' + this.sunflower[j].variety)
          .openPopup();
      }
    } else {
      for (let j = 0; j < this.sunflowerMarker.length; j++) {
        this.sunflowerMarker[j].removeFrom(this.myharvestMap)
      }
    }
    if (this.wheatCategory) {
      for (let j = 0; j < this.wheatMarker.length; j++) {
        this.wheatMarker[j].addTo(this.myharvestMap)
          .bindPopup('Blé, variété : ' + this.wheat[j].variety)
          .openPopup();
      }
    } else {
      for (let j = 0; j < this.wheatMarker.length; j++) {
        this.wheatMarker[j].removeFrom(this.myharvestMap)
      }
    }

  }

  ngOnChanges() {
  }


  ngOnInit() {

    this.barleyService.getBarleyObservation().subscribe(
      (param_data: Observation[]) => {
        this.barley = param_data;
        let marker: L.Marker;
        this.barleyMarkers = [];
        for (let i = 0; i < this.barley.length; i++) {
          marker = L.marker([this.barley[i].coordinates.latitude, this.barley[i].coordinates.longitude], { icon: greenIcon });
          this.barleyMarkers.push(marker);
        }

        this.refresh();
      }
    )

    this.cornService.getCornObservation().subscribe(
      (param_data: Observation[]) => {
        this.corn = param_data;
        let marker: L.Marker;
        this.cornMarker = [];
        for (let i = 0; i < this.corn.length; i++) {
          marker = L.marker([this.corn[i].coordinates.latitude, this.corn[i].coordinates.longitude], { icon: redIcon });
          this.cornMarker.push(marker);
        }
        this.refresh()
      }
    )

    this.rapeseedService.getRapeseedObservation().subscribe(
      (param_data: Observation[]) => {
        this.rapeseed = param_data;
        let marker: L.Marker;
        this.rapeseedMarker = []
        for (let i = 0; i < this.rapeseed.length; i++) {
          marker = L.marker([this.rapeseed[i].coordinates.latitude, this.rapeseed[i].coordinates.longitude], { icon: yellowIcon });
          this.rapeseedMarker.push(marker)
        }
        this.refresh();
      }
    )

    this.sunflowerService.getSunflowerObservation().subscribe(
      (param_data: Observation[]) => {
        this.sunflower = param_data;
        let marker: L.Marker;
        this.sunflowerMarker = [];
        for (let i = 0; i < this.sunflower.length; i++) {
          marker = L.marker([this.sunflower[i].coordinates.latitude, this.sunflower[i].coordinates.longitude], { icon: blackIcon });
          this.sunflowerMarker.push(marker)
        }
        this.refresh();
      }
    )

    this.wheatService.getWheatObservation().subscribe(
      (param_data: Observation[]) => {
        this.wheat = param_data;
        let marker: L.Marker;
        this.wheatMarker = [];
        for (let i = 0; i < this.wheat.length; i++) {
          marker = L.marker([this.wheat[i].coordinates.latitude, this.wheat[i].coordinates.longitude]);
          this.wheatMarker.push(marker)
        }
        this.refresh();
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



    this.myharvestMap = L.map('harvestMap').setView([48.856614, 2.3522219], 6.4);
    this.layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Harvest Map'

    });

    this.layer.addTo(this.myharvestMap);

  }

}
