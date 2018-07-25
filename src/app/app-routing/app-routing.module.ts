import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from '../principal/principal.component';
import { FormulariosPrincipalComponent } from '../formularios-principal/formularios-principal.component';
import {HomeComponent} from '../home/home.component';

const routes : Routes = [
  { path: '', redirectTo : '/principal',pathMatch:'full' },
  { path: 'principal', component: PrincipalComponent},
  { path:'formularios-principal', component: FormulariosPrincipalComponent},
  { path:'clase2',component:HomeComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
