import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroProductosService {

  private urlMarca: string='http://localhost:8083/marca/all'
  private urlTalla: string ='http://localhost:8083/talla/all'
  private urlGenero: string ='http://localhost:8083/genero/all'
  private urlColor: string ='http://localhost:8083/color/all'

  constructor(

  private httpClient: HttpClient) { }



public getAllMarca(): Observable<any>{
  return this.httpClient.get(this.urlMarca)
}


public getAllTalla(): Observable<any>{
  return this.httpClient.get(this.urlTalla)
}


public getAllGenero(): Observable<any>{
  return this.httpClient.get(this.urlGenero)
}


public getAllColor(): Observable<any>{
  return this.httpClient.get(this.urlColor)
}

}
