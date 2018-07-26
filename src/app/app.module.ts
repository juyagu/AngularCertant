import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { LoopBackV2Component } from './loop-back-v2/loop-back-v2.component';
import { LoopBackV3Component } from './loop-back-v3/loop-back-v3.component';
import { LoopBackV4Component } from './loop-back-v4/loop-back-v4.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormulariosPrincipalComponent } from './formularios-principal/formularios-principal.component';
import { FormPeliculaComponent } from './form-pelicula/form-pelicula.component';
import { Clase2Module } from './clase2/clase2.module';
import { Clase4Module } from './clase4/clase4.module';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    LoopBackV2Component,
    LoopBackV3Component,
    LoopBackV4Component,
    MenuComponent,
    PrincipalComponent,
    FormulariosPrincipalComponent,
    FormPeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Clase2Module,
    Clase4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
