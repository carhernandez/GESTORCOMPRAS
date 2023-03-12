import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  [x: string]: any;


  private urlObtenerProduct: string= 'http://localhost:8083/producto/all'
  private urlRegisterProduct: string='http://localhost:8083/producto/register'
  private urlBusquedaPorItems: string='http://localhost:8083/producto'
  private urlGetProductByGender: string='http://localhost:8083/producto/generoparam/'
  private urlMasBuscados: string='http://localhost:8083/producto/masbuscados'
  private urlBarraBusqueda: string='http://localhost:8083/producto/buscar'
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  productos:Producto[]=[] ;
  busqueda: string='';

  constructor(private http: HttpClient) {

    this.saveProduct;
    this.cargarProductos;

   }


   public saveProduct(producto:Producto): Observable<Producto>{
    return this.http.post<Producto>(this.urlRegisterProduct,producto,{headers:this.httpHeaders})
  }


  public buscarPorGenero(genero:number): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlGetProductByGender+genero);
  }

 private cargarProductos():Observable<Producto[]>{

  return this.http.get<Producto[]>(this.urlObtenerProduct);
}

buscarPorItem(genero: string, termino: string): Observable<Producto[]> {
  const url = `${this.urlBusquedaPorItems}/${genero}/${termino}`;
  return this.http.get<Producto[]>(url);
}

 buscar(busqueda:string):Observable<any> {

    const url= `${this.urlBarraBusqueda}${"?descripcion="}${busqueda}`;

   return this.http.get(url);
   console.log(this.busqueda)
  }

  buscarDetalle(idProducto:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.urlBusquedaPorItems}/${idProducto}`)

  }

  masBuscados():Observable<any>{
    return this.http.get(this.urlMasBuscados)
  }

  buscarPorId(id:number):Observable<Producto>{
    return this.http.get<Producto>(this.urlBusquedaPorItems)


  }
}


