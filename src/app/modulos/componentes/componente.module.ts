import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacionComponent } from './barraNavegacion/barra-navegacion.component';
import { RouterModule } from '@angular/router';
import { ComponenteRutas } from './componente.routing';
import { BarraBusquedadComponent } from './barraBusquedad/barra-busquedad.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos/productos.component';
import { BarrapruebaComponent } from './barraprueba/barraprueba.component';
// import { RegistroProductosComponent } from './registroProductos/registro-productos/registro-productos.component';



@NgModule({
  declarations: [
    BarraNavegacionComponent,
    BarraBusquedadComponent,
    // ModalComponent,
    ProductosComponent,
    BarrapruebaComponent,
    // RegistroProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponenteRutas),
    ReactiveFormsModule,
    FormsModule,
    

  ]
})
export class ComponenteModule { }
