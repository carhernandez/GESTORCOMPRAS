import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


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

  @Input()
  producto: any={};

  @Input()
  indice: number=0;

  @Output()
  productoSelecionado: EventEmitter<number> | undefined;



  constructor(private _router: Router,
    ) {}

  ngOnInit(): void {
    console.log("ngOnInit");

  }

  verProducto(){
    //this._router.navigate(['/producto', this.indice]);

  }

}














