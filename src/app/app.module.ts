import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


//! Ingresa el modulo ContadorComponent
/*
1.- NgModule es un decorador.
2.- En declarations resive los componentes.
3.- En imports resive otros modulos.
4.- Se puede usar CTRL+. para hacer la importacion.
*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
