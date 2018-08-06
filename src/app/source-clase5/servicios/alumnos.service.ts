import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Alumno } from '../entities/alumno';

import { ALUMNOS } from '../base/base-alumnos';

@Injectable()
export class AlumnosService {

  constructor() { }

  getAlumnos(): Observable<Alumno[]> {
    return of(ALUMNOS);
  }
}
