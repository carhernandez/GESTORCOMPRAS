import { Route } from "@angular/router";
import { BarraNavegacionComponent } from "./barraNavegacion/barra-navegacion.component";
import { ProductosComponent } from './productos/productos/productos.component';
import { HomeComponent } from './home/home/home.component';
import { ProductosHombreComponent } from './productos-hombre/productos-hombre/productos-hombre.component';
import { ProductosMujerComponent } from './productos-mujer/productos-mujer/productos-mujer.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { MasbuscadosComponent } from '../masbuscados/masbuscados.component';
import { BarraBusquedadComponent } from "./barraBusquedad/barra-busquedad.component";
import { ModalComponent } from "./modal/modal.component";



export const ComponenteRutas: Route[] = [

  { path: 'barraNavegacion', component: BarraNavegacionComponent },

    {path: 'modal', component: ModalComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos/:idProducto', component: ProductoDetalleComponent},
    {path: 'home', component: HomeComponent},
    {path: 'barra', component: BarraBusquedadComponent},
    {path: 'hombres', component: ProductosHombreComponent},
     {path: 'mujeres', component: ProductosMujerComponent},
     {path: 'masBuscados', component: MasbuscadosComponent},

]
