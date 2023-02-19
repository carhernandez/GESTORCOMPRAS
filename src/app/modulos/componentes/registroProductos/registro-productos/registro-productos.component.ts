// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from 'express';
// import { Color } from 'src/app/interface/color';
// import { Genero } from 'src/app/interface/genero';
// import { Marca } from 'src/app/interface/marca';
// import { Producto } from 'src/app/interface/producto';
// import { Talla } from 'src/app/interface/talla';
// import { ProductoService } from 'src/app/servicios/producto.service';
// import { RegistroProductosService } from 'src/app/servicios/registroProductos/registro-productos.service';


// @Component({
//   selector: 'app-registro-productos',
//   templateUrl: './registro-productos.component.html',
//   styleUrls: ['./registro-productos.component.css']
// })
// export class RegistroProductosComponent implements OnInit {

//   registroProductoForm!: FormGroup;
//   producto!:Producto;
//   marca!:Marca;
//   color!:Color;
//   genero!:Genero;
//   talla!:Talla;


//   constructor(
//     public fb:FormBuilder,
//     public registroProductosService: RegistroProductosService,
//     public productoService: ProductoService,
//     private _router:Router

//   ) {

//   }

//   ngOnInit(): void {
//     this.registroProductoForm = this.fb.group({
//       descripcion: [null,Validators.required],
//       marca: [null,Validators.required],
//       color: [null,Validators.required],
//       genero: [null,Validators.required],
//       talla:[null,Validators.required],
//       valor:[null,Validators.required],
//       cantidad:[null,Validators.required],
//   });;


//   this.registroProductosService
//   .getAllMarca()
//   .subscribe(resp=>{


//     this.marca=resp;

//    },
//    error => {console.error(error);
//    }
//    )
//   }
//    guardar():void{
//     this.productoService.saveProduct(this.registroProductoForm.value).subscribe( resp=>{

//     //   this._router.navigate(['/barraNavegacion']);


//       this.registroProductoForm.reset();

//     },
//     error => {console.error(error)
//     }

//     )
//   }



// }




