import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { ComparePageComponent } from './compare-page/compare-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    AddPageComponent,
    ComparePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
