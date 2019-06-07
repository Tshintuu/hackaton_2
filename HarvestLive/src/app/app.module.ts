import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { ComparePageComponent } from './compare-page/compare-page.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';

import { SelectPanelComponent } from './select-panel/select-panel.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    AddPageComponent,
    ComparePageComponent,
    FooterComponent,
    NavbarComponent,
    MapComponent,
    SelectPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: MapPageComponent
        },
        {
          path: "ajouterResultats",
          component: AddPageComponent
        },
        {
          path: "comparerResultats",
          component: ComparePageComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
