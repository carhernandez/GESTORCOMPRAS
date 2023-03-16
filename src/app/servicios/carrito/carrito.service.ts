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
private urlObtener: string='http://localhost:8083/carrito/'
private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(
    private http: HttpClient,
  ) { }

  public grabarCarrito(carrito:Carrito): Observable<Carrito>{
    console.log(carrito)
    return this.http.post<Carrito>(this.url,carrito,{headers:this.httpHeaders})
  }

  public getCarrito(id:number): Observable<Carrito[]>{
    console.log("carrito");
    const url= `${this.urlObtener}/${id}`
    return this.http.get<Carrito[]>(url);
  }

  eliminarItemPorId(id?: number): Observable<Carrito> {
    const url = `${this.urlObtener}/${id}`;
    return this.http.delete<Carrito>(url, { headers: this.httpHeaders })
  }
}
