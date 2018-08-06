import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from '../titulo/titulo.component';
import { TablaAlumnosComponent } from '../tabla-alumnos/tabla-alumnos.component';
import { TituloTablaComponent } from '../titulo-tabla/titulo-tabla.component';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TituloComponent,
    TablaAlumnosComponent,
    TituloTablaComponent,
    DetalleAlumnoComponent,
    HomeComponent
  ],
  exports: [
    TituloComponent,
    TablaAlumnosComponent,
    TituloTablaComponent,
    DetalleAlumnoComponent,
    HomeComponent
  ]
})
export class Clase2Module { }
