import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interface/producto';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-masbuscados',
  templateUrl: './masbuscados.component.html',
  styleUrls: ['./masbuscados.component.css']
})
export class MasbuscadosComponent implements OnInit {

productos!: Producto[];

constructor(
  private productoService: ProductoService,
){}

ngOnInit(): void {

  this.productoService.masBuscados()
  .subscribe(res => {
    this.productos = res;
  })

}

}
