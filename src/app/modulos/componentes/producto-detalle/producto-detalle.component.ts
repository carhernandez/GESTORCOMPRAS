import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
carrito!:Carrito;
formgroup!: FormGroup;
//usuario!: Usuario;

  constructor(
    public fb:FormBuilder,
    private activedRouter:ActivatedRoute,
    private productoService:ProductoService,
    private tallaservice:TallaserviceService,
    private carritoService: CarritoService,
  ){}

ngOnInit(): void {

  this.formgroup=this.fb.group({
    cantidad:[null,Validators.required, Validators.min(0)],
  })

  this.activedRouter.params
  .pipe(
    switchMap(({idProducto})=> this.productoService.buscarDetalle(idProducto))
  )
  .subscribe(resp =>{
    console.log(resp);
    this.producto=resp;
      // this.productoService.buscarDetalle(resp['idProducto'])
      // .subscribe((produc:any)=>{
      //   this.id= resp['idProducto'];


      //   this.producto=produc;


      });
      this.tallaservice.getAllTallas().subscribe(resp=>{
        this.talla= resp;

      })

    }


    // this.activedRouter.params.pipe(switchMap(({idProducto})=>
    // this.productoService.buscarPorId(idProducto)),
    // tap(console.log)).subscribe(prod =>{
    //   this.producto= prod;
    //   console.log(prod);

    // })


agregarCarrito():void{

  let producto= {producto:this.producto};
  console.log(producto)

  let cantidad= {cantidad:this.cantidad};

  console.log(cantidad);
  //console.log(this.usuario)
  console.log(this.estado)

  //let tallaSeleccionada= {tallaSeleccionada:this.tallaSeleccionada};

  let nuevoObjeto: Carrito={
    idCarrito: 0,
    estado: this.estado,
    //usuario:this.usuario,
    producto: producto.producto,
    cantidad: cantidad.cantidad,
    cantidadPedida: undefined,
    tallaPedida: undefined
  }
  console.log(nuevoObjeto);

this.carritoService.grabarCarrito(nuevoObjeto).subscribe(resp =>{
  console.log(resp);

})

}


}

