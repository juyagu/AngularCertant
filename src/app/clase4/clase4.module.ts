import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingComponent } from '../source-clase4/public/landing';
import { AppComponent } from '../source-clase4/app.component';
import { FormPeliculaComponent } from '../source-clase4/form-pelicula/form-pelicula.component';
import { ResaltarDirective } from '../source-clase4/resaltar.directive';
import { ResaltarDinamicoDirective } from '../source-clase4/resaltar-dinamico.directive';
import { ResaltarInputDirective } from '../source-clase4/resaltar-input.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    FormPeliculaComponent,
    ResaltarDirective,
    ResaltarDinamicoDirective,
    ResaltarInputDirective
  ],
  exports:[
    AppComponent,
    LandingComponent,
    FormPeliculaComponent,
    ResaltarDirective,
    ResaltarDinamicoDirective,
    ResaltarInputDirective
  ]
})
export class Clase4Module { }
