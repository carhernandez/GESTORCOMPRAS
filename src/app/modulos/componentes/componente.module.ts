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
import { HomeComponent } from './home/home/home.component';
import { ProductosHombreComponent } from './productos-hombre/productos-hombre/productos-hombre.component';
import { ProductosMujerComponent } from './productos-mujer/productos-mujer/productos-mujer.component';
// import { RegistroProductosComponent } from './registroProductos/registro-productos/registro-productos.component';



@NgModule({
  declarations: [
    
    BarraBusquedadComponent,
    // ModalComponent,
    ProductosComponent,
    BarrapruebaComponent,
    HomeComponent,
    ProductosHombreComponent,
    ProductosMujerComponent,
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
