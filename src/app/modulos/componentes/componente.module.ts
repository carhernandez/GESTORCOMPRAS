import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionComponent } from './barraNavegacion/barra-navegacion.component';
import { RouterModule } from '@angular/router';
import { ComponenteRutas } from './componente.routing';
import { BarraBusquedadComponent } from './barraBusquedad/barra-busquedad.component';
// import { RegistroProductosComponent } from './registroProductos/registro-productos/registro-productos.component';



@NgModule({
  declarations: [
    BarraNavegacionComponent,
    BarraBusquedadComponent,
    // RegistroProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponenteRutas)
  ]
})
export class ComponenteModule { }
