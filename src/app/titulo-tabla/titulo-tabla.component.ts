import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-tabla',
  templateUrl: './titulo-tabla.component.html',
  styleUrls: ['./titulo-tabla.component.css']
})
export class TituloTablaComponent implements OnInit {

  titulo:string = "Tabla de Alumnos";
  constructor() { }

  ngOnInit() {
  }

  getTitulo(){
    return "Tabla de Alumnos";
  }

}
