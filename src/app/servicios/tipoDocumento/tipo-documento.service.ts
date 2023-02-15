import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private urlTipoDocumento: string='http://localhost:8083/tipodocumento/all'
  constructor(

    private httpClient: HttpClient

  ) { }

public getAllDocTypes(): Observable<any>{
  return this.httpClient.get(this.urlTipoDocumento)
}

}
