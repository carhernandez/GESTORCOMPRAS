import { Component } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-barra-busquedad',
  templateUrl: './barra-busquedad.component.html',
  styleUrls: ['./barra-busquedad.component.css']
})
export class BarraBusquedadComponent {

busqueda:string='';
productos!:Producto[];

  constructor(
    private productoService: ProductoService,

  ){}


  buscarProducto(busqueda:string){
    console.log(this.busqueda);

    this.productoService.buscar(this.busqueda)
    .subscribe(resp =>{
      console.log(resp);
    })

  }

}
