import { Component, OnInit } from '@angular/core';

import { Pelicula } from '../pelicula';

@Component({
  selector: 'form-pelicula-clase4',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.css']
})
export class FormPeliculaComponent{

  generos = ["Accion","Drama","Terror","Aventura","Infantil"];

  modelo = new Pelicula(1,'Dr Strange',this.generos[3],'Scott Derrickson');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostico(){
    return JSON.stringify(this.modelo);
  }

  nuevaPelicula() {
    this.modelo = new Pelicula(11, '','');
  }

}
