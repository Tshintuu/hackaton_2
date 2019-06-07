import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css']
})
export class ComparePageComponent implements OnInit {

  ngOnInit() {

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
          { y: 415, name: "Moyen" },
          { y: 337, name: "Inférieur à la moyenne" },
          { y: 141, name: "Supérieur à la moyenne" },
          { y: 20, name: "Nettement supérieur à la moyenne" },
          { y: 86, name: "Nettement inférieur à la moyenne" },
        ]
      }]
    });
    charttwo.render();
  
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
          { y: 633, name: "Conventionelle" },
          { y: 362, name: "TCS" },
          { y: 6, name: "Agriculture" }
        ]
      }]
    });
    charttwoSub.render();
  
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
  
    let charthreesub = new CanvasJS.Chart("comparaisonColza", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      subtitles:[
        {
          text: "Comparaison du colza avec une moyenne de 5 ans",
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
          { y: 280, name: "Moyen" },
          { y: 415, name: "Inférieur à la moyenne" },
          { y: 68, name: "Supérieur à la moyenne" },
          { y: 17, name: "Nettement supérieur à la moyenne" },
          { y: 220, name: "Nettement inférieur à la moyenne" },
        ],
        
      }]
    });
    charthreesub.render();
  
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
