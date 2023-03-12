import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';
import { Router } from '@angular/router';



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

  // verProducto(){
  //   //this._router.navigate(['/producto', this.indice]);

  // }

}














