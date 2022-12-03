import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importo componentes propios
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [
  {path: '', component: ElementsHomeComponent} //forma de llamarlo en lazy loading 
  //{path: 'elements', component: ElementsHomeComponent} //creo la definicion en la ruta path y el componente individual que llama
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
