import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEndPointLogin: string='http://localhost:8083/usuarios/login';
  private urlRegister: string='http://localhost:8083/usuarios/register'
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) {

   }

   login(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPointLogin,usuario,{headers:this.httpHeaders})
   }


   public saveUser(user:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlRegister,user,{headers:this.httpHeaders})
  }


}
