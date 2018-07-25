import { Component, OnInit,Input } from '@angular/core';
import { Alumno } from '../entities/alumno';

@Component({
  selector: 'detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  @Input()
  alumno:Alumno;
  
  
  constructor() {
   
   }

  ngOnInit() {
    this.alumno.apodo = 'PEPE';
  }

}
