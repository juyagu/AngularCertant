import { Component, OnInit } from '@angular/core';

import { Pelicula } from './pelicula';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.css']
})
export class FormPeliculaComponent{

  frmPelicula:FormGroup;
  generos = ["Accion","Drama","Terror","Aventura","Infantil"];

  modelo = new Pelicula(1,'Dr Strange',this.generos[3],'Scott Derrickson');

  submitted = false;

  constructor(private fb:FormBuilder ){
    this.frmPelicula = this.fb.group({
      'nombre':['',Validators.compose([Validators.required])],
      'director':['',Validators.compose([Validators.required])],
      'email':['',Validators.compose([Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'genero':[]
    })
  }
  onsubmit(){
    console.log(this.modelo);
    this.submitted = true;
  }

  enviar(){
    let frm = this.frmPelicula.value;
    console.log(frm);
  }

  get diagnostico(){
    return JSON.stringify(this.modelo);
  }

  nuevaPelicula() {
    this.modelo = new Pelicula(11, '','');
  }

}
