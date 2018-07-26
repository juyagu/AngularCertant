import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from '../principal/principal.component';
import { FormulariosPrincipalComponent } from '../formularios-principal/formularios-principal.component';
import {HomeComponent} from '../home/home.component';
import { AppComponent } from '../source-clase4/app.component';
import { FormPeliculaComponent } from '../source-clase4/form-pelicula/form-pelicula.component';

const routes : Routes = [
  { path: '', redirectTo : '/principal',pathMatch:'full' },
  { path: 'principal', component: PrincipalComponent},
  { path:'formularios-principal', component: FormulariosPrincipalComponent},
  { path:'clase2',component:HomeComponent},
  { path:'clase4',component:AppComponent},
  { path:'frmPeliClase4',component:FormPeliculaComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
