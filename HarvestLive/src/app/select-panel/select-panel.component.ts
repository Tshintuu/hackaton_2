import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';



@Component({
  selector: 'app-select-panel',
  templateUrl: './select-panel.component.html',
  styleUrls: ['./select-panel.component.css']
})
export class SelectPanelComponent implements OnInit {

  

  @Output() valueChange = new EventEmitter<boolean>();
  @Output() cornChange = new EventEmitter<boolean>();
  @Output() rapeseedChange = new EventEmitter<boolean>();
  @Output() sunflowerChange = new EventEmitter<boolean>();
  @Output() wheatChange = new EventEmitter<boolean>();


  showBarley = true;
  showCorn = true;
  showRapeseed = true;
  showSunflower = true;
  showWheat = true;

  constructor() {

  }

  ngOnInit() {


  }

  toggleBarley() {
    this.showBarley = !this.showBarley
    this.valueChange.emit(this.showBarley)
  }

  toggleCorn() {
    this.showCorn = !this.showCorn
    this.cornChange.emit(this.showCorn)

  }

  toggleRapeseed(){
    this.showRapeseed = !this.showRapeseed
    this.rapeseedChange.emit(this.showRapeseed)
  }

  toggleSunflower(){
    this.showSunflower = !this.showSunflower
    this.sunflowerChange.emit(this.showSunflower)
  }

  toggleWheat(){
    this.showWheat = !this.showWheat
    this.wheatChange.emit(this.showWheat)
  }


}
