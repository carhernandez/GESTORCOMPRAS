import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private _router: Router

    ){}

    consultarProductosHombre(){
      this.productoservice.buscarHombre().subscribe()

      
      this._router.navigate(['/productos']);;


      console.log("buscarHombre")
    }

    consultarProductosMujer(){
      this.productoservice['']();
    }

    buscar(){
      console.log(this.busqueda)
    }

}
