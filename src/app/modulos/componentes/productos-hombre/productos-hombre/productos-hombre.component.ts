import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-productos-hombre',
  templateUrl: './productos-hombre.component.html',
  styleUrls: ['./productos-hombre.component.css']
})
export class ProductosHombreComponent implements OnInit {

  productos:Producto[]=[];

  constructor(
   private productoService:ProductoService,
   private _router:Router
  ) { }

  ngOnInit(): void {
    this.consultarProductos(1);

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
