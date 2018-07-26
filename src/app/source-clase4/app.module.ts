import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './public/landing';
import { OtroComponent } from './otro/otro.component';
import { ResaltarDirective } from './resaltar.directive';
import { ResaltarDinamicoDirective } from './resaltar-dinamico.directive';
import { ResaltarInputDirective } from './resaltar-input.directive';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OtroComponent,
    ResaltarDirective,
    ResaltarDinamicoDirective,
    ResaltarInputDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
