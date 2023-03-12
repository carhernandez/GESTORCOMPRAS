import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from 'src/app/interface/carrito';
import { Producto } from 'src/app/interface/producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

producto!: Producto;

private url: string='http://localhost:8083/carrito/guardar'
private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(
    private http: HttpClient,
  ) { }

  public grabarCarrito(carrito:Carrito): Observable<Carrito>{
    return this.http.post<Carrito>(this.url,carrito,{headers:this.httpHeaders})
  }
}
