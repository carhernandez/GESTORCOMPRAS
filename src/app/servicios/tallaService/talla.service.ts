import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TallaserviceService {

  private urlObtenerTalla: string= 'http://localhost:8083/talla/all'

  constructor(

    private http:HttpClient

    ) { }

  public getAllTallas(): Observable<any>{
    return this.http.get(this.urlObtenerTalla)
  }
}
