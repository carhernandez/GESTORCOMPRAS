import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Carrito } from 'src/app/interface/carrito';
import { Producto } from 'src/app/interface/producto';
import { Talla } from 'src/app/interface/talla';
import { Usuario } from 'src/app/interface/usuario';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TallaserviceService } from 'src/app/servicios/tallaService/talla.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

producto!:Producto;
id:string="";
talla: any;
tallaSeleccionada!:Talla;
cantidad:number=0;
estado:string="activo";
usuario!: Usuario;

  constructor(
    private activedRouter:ActivatedRoute,
    private productoService:ProductoService,
    private tallaservice:TallaserviceService,
    private carritoService: CarritoService,
  ){}

ngOnInit(): void {

  this.activedRouter.params.
    subscribe(resp =>{
      this.productoService.buscarDetalle(resp['idProducto'])
      .subscribe((produc:any)=>{
        this.id= resp['idProducto'];

        this.producto=produc;
        console.log(resp);

      })
    })
    this.tallaservice.getAllTallas().subscribe(resp=>{
      this.talla= resp;

    })

    // this.activedRouter.params.pipe(switchMap(({idProducto})=>
    // this.productoService.buscarPorId(idProducto)),
    // tap(console.log)).subscribe(prod =>{
    //   this.producto= prod;
    //   console.log(prod);

    // })
}

agregarCarrito():void{

  let producto= {producto:this.producto};
  console.log("producto seleccionado"+ producto)

  let cantidad= {cantidad:this.cantidad};

  console.log(cantidad);
  console.log(this.usuario)
  console.log(this.estado)

  //let tallaSeleccionada= {tallaSeleccionada:this.tallaSeleccionada};

  let nuevoObjeto: Carrito={
    estado:this.estado,
    usuario:this.usuario,
    producto:this.producto,
    cantidad:cantidad.cantidad,


  }
  console.log("Objeto Nuevo"+nuevoObjeto);

this.carritoService.grabarCarrito(nuevoObjeto).subscribe(resp =>{
  console.log(resp);

})


}


}

