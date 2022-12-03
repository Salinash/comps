import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importando modulos creados y componentes creados

//import { ElementsModule } from './elements/elements.module';
//lo oculto si quiero implementar lazy loading (leer del servidor solo los modulos que son necesarios en cada pagina)
//import { CollectionsModule } from './collections/collections.module';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    //los mismos modulos que se importan al inicio
    BrowserModule,    
    //ElementsModule,
    //CollectionsModule,
    AppRoutingModule, //importa el orden en que se importa
    //AppRoutingModule debe ser el ultimo para que primero se muestren las rutas de los modulos creados
    // hacia los componentes dentro de ellos y luego las rutas generales del AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
