import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';
import { HarvestServiceService } from '../harvest-service.service';
import { CornHarvestService } from '../corn-harvest.service';
import { RapeseedHarvestService } from '../rapeseed-harvest.service';
import { SunflowerHarvestService } from '../sunflower-harvest.service';
import { WheatHarvestService } from '../wheat-harvest.service';
import { Observation } from '../observation';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent implements OnInit {

  public barleyVeryBelow: number;
  public barleyBelow: number;
  public barleyAverage: number;
  public barleyAbove: number;
  public barleyVeryAbove: number;
  public barleyConventional: number;
  public barleyTCS: number;
  public barleyOrganic: number;

  constructor(
    public barleyService: HarvestServiceService,
    public cornService: CornHarvestService,
    public rapeseedService: RapeseedHarvestService,
    public sunflowerService: SunflowerHarvestService,
    public wheatService: WheatHarvestService,

  ) {
    this.barleyVeryBelow=0;
    this.barleyBelow=0;
    this.barleyAverage=0;
    this.barleyAbove=0;
    this.barleyVeryAbove=0;
    this.barleyConventional=0;
    this.barleyTCS=0;
    this.barleyOrganic=0;
  }

  ngOnInit() {

    this.barleyService.getBarleyObservation().subscribe(
      (param_data: Observation[]) => {
        for(let i=0; i<param_data.length; i++) {
          switch(param_data[i].yieldNotation){
            case 1 : 
              this.barleyVeryBelow++;
              break;
            case 2 : 
              this.barleyBelow++;
              break;
            case 3 : 
              this.barleyAverage++;
              break;
            case 4 : 
              this.barleyAbove++;
              break;
            case 5 : 
              this.barleyVeryAbove++;
              break;
          }
        }
        let yieldAverage = this.barleyVeryBelow + this.barleyBelow + this.barleyAverage + this.barleyAbove + this.barleyVeryAbove;
        this.barleyVeryBelow = (this.barleyVeryBelow/yieldAverage)*1000;
        this.barleyBelow = (this.barleyBelow/yieldAverage)*1000;
        this.barleyAverage = (this.barleyAverage/yieldAverage)*1000;
        this.barleyAbove = (this.barleyAbove/yieldAverage)*1000;
        this.barleyVeryAbove = (this.barleyVeryAbove/yieldAverage)*1000;

        let charttwo = new CanvasJS.Chart("rendementsOrge", {
          theme: "light2",
          animationEnabled: true,
          exportEnabled: true,
          title:{
            text: "Résultats en orge",
            fontSize: 40,
            fontFamily: 'Montserrat'
          },
            subtitles:[
            {
              text: "Répartitions des rendements en orge d'hiver (en qtx)",
              fontColor: "grey",
              fontSize: 20,
              fontFamily: 'Montserrat'
            }
            ],
          
          data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<b>{name}</b>: (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
              { y: this.barleyAverage, name: "Moyen" },
              { y: this.barleyBelow, name: "Inférieur à la moyenne" },
              { y: this.barleyAbove, name: "Supérieur à la moyenne" },
              { y: this.barleyVeryAbove, name: "Nettement supérieur à la moyenne" },
              { y: this.barleyVeryBelow, name: "Nettement inférieur à la moyenne" },
            ]
          }]
        });
        charttwo.render();
        
        for(let i=0; i<param_data.length; i++){
          switch(param_data[i].cultivationMethod){
            case "conventional" : 
              this.barleyConventional++;
              break;
            case "simplified cultivation methods" : 
              this.barleyTCS++;
              break;
            case "organic farming" : 
              this.barleyOrganic++;
              break;
          }
        }

        let techniqueAverage = this.barleyConventional + this.barleyTCS + this.barleyOrganic;
        this.barleyConventional = (this.barleyConventional/techniqueAverage)*1000;
        this.barleyTCS = (this.barleyTCS/techniqueAverage)*1000;
        this.barleyOrganic = (this.barleyOrganic/techniqueAverage)*1000;

        let charttwoSub = new CanvasJS.Chart("techniqueCulturale", {
          theme: "light2",
          animationEnabled: true,
          exportEnabled: true,
            subtitles:[
            {
              text: "Technique culturale",
              fontColor: "grey",
              fontSize: 20,
              fontFamily: 'Montserrat'
            }
            ],
          
          data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<b>{name}</b>: (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
              { y: this.barleyConventional, name: "Conventionelle" },
              { y: this.barleyTCS, name: "TCS" },
              { y: this.barleyOrganic, name: "Agriculture" }
            ]
          }]
        });
        charttwoSub.render();

    })

  
    let charthree = new CanvasJS.Chart("rendementsColza", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Résultats en colza",
        fontSize: 40,
        fontFamily: 'Montserrat'
      },
      subtitles:[
        {
          text: "Répartitions des rendements en colza (en qtx)",
          fontColor: "grey",
          fontSize: 20,
          fontFamily: 'Montserrat'
        }
        ],
      
      data: [{
        type: "pie",
        showInLegend: false,
        toolTipContent: "<b>{name}</b>: (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 26, name: ">45" },
          { y: 261, name: "<30" },
          { y: 130, name: "40-45" },
          { y: 226, name: "35-40" },
          { y: 357, name: "30-35" },
        ],
        
      }]
    });
    charthree.render();
  
    let comparaisonColza = new CanvasJS.Chart("comparaisonColza", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
          text: "Comparaison du colza avec une moyenne de 5 ans",
          fontColor: "grey",
          fontSize: 20,
          fontFamily: 'Montserrat'
        },
      data: [{
        type: "pie",
        showInLegend: false,
        toolTipContent: "<b>{name}</b>: (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 280, name: "Moyen" },
          { y: 415, name: "Inférieur à la moyenne" },
          { y: 68, name: "Supérieur à la moyenne" },
          { y: 17, name: "Nettement supérieur à la moyenne" },
          { y: 220, name: "Nettement inférieur à la moyenne" },
        ],
      }]
    });
    comparaisonColza.render();
  
    let charthfour = new CanvasJS.Chart("rendementsBle", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Résultats en blé",
        fontSize: 40,
        fontFamily: 'Montserrat'
      },
      subtitles:[
        {
          text: "Répartitions des rendements en blé (en qtx)",
          fontColor: "grey",
          fontSize: 20,
          fontFamily: 'Montserrat'
        }
        ],
      
      data: [{
        type: "pie",
        showInLegend: false,
        toolTipContent: "<b>{name}</b>: (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 85, name: ">100" },
          { y: 209, name: "<70" },
          { y: 209, name: "90-99" },
          { y: 209, name: "80-89" },
          { y: 288, name: "70-79" },
        ],
        
      }]
    });
    charthfour.render();
  
    let charthfive = new CanvasJS.Chart("comparaisonBle", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Comparaison du blé avec une moyenne de 5 ans",
        fontColor: "grey",
        fontSize: 20,
        fontFamily: 'Montserrat'
      },
      data: [{
        type: "pie",
        showInLegend: false,
        toolTipContent: "<b>{name}</b>: (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 345, name: "Moyen" },
          { y: 333, name: "Inférieur à la moyenne" },
          { y: 169, name: "Supérieur à la moyenne" },
          { y: 153, name: "Nettement inférieur à la moyenne" },
        ],
        
      }]
    });
    charthfive.render();
    }
  }
