import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrito } from 'src/app/interface/carrito';
import { DetalleFactura } from 'src/app/interface/DetalleFactura';
import { Factura } from 'src/app/interface/Factura';
import { Producto } from 'src/app/interface/producto';
import { Talla } from 'src/app/interface/talla';
import { Usuario } from 'src/app/interface/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {


  idUsuarioActual!: number;
  usuario!:Usuario;
  usuarioLogueado!: Usuario;

  carrito: Carrito[] =[];
  productosCarrito!:Producto;
  producto!:Producto;

  tallaSeleccionada!:Talla;
  total:number = 0;
  cantidad: number = 0;
  precio: number = 0;
  subtotal: number = 0;
  tallaPedida: any;
  cantidadPedida: any;






  constructor(
    private carritoService: CarritoService,
    private authService:AuthService,
    private route:ActivatedRoute,
    private productoService:ProductoService,

  ){}



  obtenerCarrito(id:number): void {
    console.log("obtener carrito" + this.idUsuarioActual);

     this.carritoService.getCarrito(this.idUsuarioActual).subscribe(resp=>{
     this.carrito=resp;
   })

 }





}
