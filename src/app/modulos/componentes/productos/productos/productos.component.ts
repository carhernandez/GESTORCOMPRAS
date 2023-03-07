import { Component, OnInit   } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Marca } from 'src/app/interface/marca';
import { Producto } from 'src/app/interface/producto';
import { Talla } from 'src/app/interface/talla';
import { ProductoService } from 'src/app/servicios/producto.service';
import { TallaserviceService } from 'src/app/servicios/tallaService/talla.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

 public  producto: Producto [] = [];
 public talla: Talla [] = [];
 public marca: Marca[] =[];

  constructor(private _productoService: ProductoService,
              private _tallaService: TallaserviceService,
              public fb: FormBuilder,
    ) {}

  ngOnInit(): void {
    this._tallaService.
    getAllTallas()
    .subscribe(resp=>{

      this.talla=resp;

     },
     error => {console.error(error);
     });
  }

  private buscarProductosHombre(){
    this._productoService.buscarHombre().subscribe((resp: Producto[]) =>{
      this.producto = resp;

      console.log(resp);
  })

};

    private buscarProductosMujer(){
    this._productoService.buscarMujer().subscribe(response =>{
      this.producto = response

      console.log(response);
    });

}













}
