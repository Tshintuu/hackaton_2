import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  public myharvestMap;
  ngOnInit() {

    this.myharvestMap = L.map('harvestMap').setView([	47, 2], 6.4);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Harvest Map'

  }).addTo(this.myharvestMap);
  /*L.marker([48.864716, 2.349014]).addTo(this.myharvestMap)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();*/


  }

}
