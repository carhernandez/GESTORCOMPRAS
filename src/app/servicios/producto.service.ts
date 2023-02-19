import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private urlRegisterProduct: string='http://localhost:8083/producto/register'
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) {

   }


   public saveProduct(producto:Producto): Observable<Producto>{
    return this.http.post<Producto>(this.urlRegisterProduct,producto,{headers:this.httpHeaders})
  }


}
