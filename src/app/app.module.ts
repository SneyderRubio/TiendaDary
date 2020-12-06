import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { app_routing } from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpofrutasComponent } from './cuerpofrutas/cuerpofrutas.component';
import { CuerpocarnesComponent } from './cuerpocarnes/cuerpocarnes.component';
import { CuerpogranosComponent } from './cuerpogranos/cuerpogranos.component';
import { CuerpocontactenosComponent } from './cuerpocontactenos/cuerpocontactenos.component';


@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    FooterComponent,
    EncabezadoComponent,  
    CuerpofrutasComponent,
    CuerpocarnesComponent,
    CuerpogranosComponent,
    CuerpocontactenosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
