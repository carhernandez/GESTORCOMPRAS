import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

  busqueda :string = "";
  productos :Producto[]=[];


  constructor(
    private _router: Router

    ){}

    buscarProducto(termino:String){
      //this._router.navigate(['/buscar', termino]);
    }

}
