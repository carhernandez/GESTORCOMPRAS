import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

  busqueda :string = ""


  constructor(
    public productoservice:ProductoService,

    ){}

    consultarProductosHombre(){
      this.productoservice.buscarHombre().subscribe;
      console.log("buscarHombre")
    }

    consultarProductosMujer(){
      this.productoservice['']();
    }

    buscar(){
      console.log(this.busqueda)
    }

}
