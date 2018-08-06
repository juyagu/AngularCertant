import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrincipalClase5Component } from '../principal/principal.component';
import { ListadoAlumnosComponent } from '../listado-alumnos/listado-alumnos.component';
import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';


import { AlumnosService } from '../servicios/index';
import { ProductosService } from '../servicios/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PrincipalClase5Component,
    ListadoAlumnosComponent,
    ListadoProductosComponent,
    DetalleProductoComponent
  ],
  exports: [
    PrincipalClase5Component,
    ListadoAlumnosComponent,
    ListadoProductosComponent,
    DetalleProductoComponent
  ],
  providers: [
    AlumnosService,
    ProductosService
  ]
})
export class Clase5Module { }
