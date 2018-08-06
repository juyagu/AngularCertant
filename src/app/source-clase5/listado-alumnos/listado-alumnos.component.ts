import { Component, OnInit } from '@angular/core';

import { Alumno } from '../entities/alumno';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  alumnos: Alumno[];
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe(alumnos => this.alumnos = alumnos);
  }

}
