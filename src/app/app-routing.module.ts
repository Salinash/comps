import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importando componentes creados
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  //creando las rutas que van ha llamar a esos componentes (header in the App Component's Template file)
  {
    path: 'elements', //forma de llamar el componente en variante lazy loading, se omite si no es en lazy 
    loadChildren: () =>
    import('./elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: 'collections', //forma de llamar el componente en variante lazy loading, se omite si no es en lazy 
    loadChildren: () =>
    import('./collections/collections.module').then(m => m.CollectionsModule)
  },
  {
    path: 'views', 
    loadChildren: () =>
    import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'mods',
    loadChildren: () => 
    import ('./mods/mods.module').then(m => m.ModsModule)
  },
  
  {path: '', component: HomeComponent }, //ruta por defecto
  {path: '**', component: NotFoundComponent} //una ruta que no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
