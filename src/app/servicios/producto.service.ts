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
  private urlGetProductMens: string='http://localhost:8083/producto/generoparam/1'
  private urlGetProductWomens: string='http://localhost:8083/producto/generoparam/2'

  private urlGetProductByGender: string='http://localhost:8083/producto/generoparam/'
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  productos:Producto[]=[] ;

  constructor(private http: HttpClient) {

    this.saveProduct;
    this.buscarHombre;
    this.buscarMujer;
    this.cargarProductos;

   }


   public saveProduct(producto:Producto): Observable<Producto>{
    return this.http.post<Producto>(this.urlRegisterProduct,producto,{headers:this.httpHeaders})
  }

  public buscarHombre(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlGetProductMens);

  }

  public buscarMujer(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlGetProductWomens);
  }

  public buscarPorGenero(genero:number): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlGetProductByGender+genero);
  }

 private cargarProductos():Observable<Producto[]>{

  return this.http.get<Producto[]>(this.urlObtenerProduct);


}











}
