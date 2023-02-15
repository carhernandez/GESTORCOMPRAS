import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionComponent } from './barraNavegacion/barra-navegacion.component';
import { RouterModule } from '@angular/router';
import { ComponenteRutas } from './componente.routing';



@NgModule({
  declarations: [
    BarraNavegacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponenteRutas)
  ]
})
export class ComponenteModule { }
