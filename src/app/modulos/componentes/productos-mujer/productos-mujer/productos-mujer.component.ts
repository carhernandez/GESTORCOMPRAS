import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-productos-mujer',
  templateUrl: './productos-mujer.component.html',
  styleUrls: ['./productos-mujer.component.css']
})
export class ProductosMujerComponent implements OnInit {

  productos:Producto[]=[];

  constructor(
   private productoService:ProductoService,
   private _router:Router
  ) { }

  ngOnInit(): void {
    this.consultarProductos(2);

  }

consultarProductos(genero:number){
  this.productos=[];
this.productoService.buscarPorGenero(genero).subscribe({
  next:(resp: Producto[]) =>{
    this.productos=resp;
  }
})


}

}
