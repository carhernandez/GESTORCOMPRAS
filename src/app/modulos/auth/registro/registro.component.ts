import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoDocumentoService } from 'src/app/servicios/tipoDocumento/tipo-documento.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
// [x: string]: any;
  registroForm!: FormGroup;
  tipoDocumento: any;
  user:any;

  constructor(
    public fb: FormBuilder,
    public userService: AuthService,
    public tipodocumentoservice: TipoDocumentoService,
    private _router:Router
){

}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
        tipoDocumento: [null,Validators.required],
        nDocumento: [null,Validators.required],
        nombres: [null,Validators.required],
        apellidos: [null,Validators.required],
        correo:[null,Validators.required],
        contrasena:[null,Validators.required],



      });;

      this.tipodocumentoservice
      .getAllDocTypes()
      .subscribe(resp=>{


       this.tipoDocumento=resp;

      },
      error => {console.error(error);
      }


      )

  }

  guardar():void{
    this.userService.saveUser(this.registroForm.value).subscribe( resp=>{

      this._router.navigate(['/login']);

      this.registroForm.reset();

    },
    error => {console.error(error)}

    )
  }

  campoRegistroEsValido(campoRegistro: string, validacion: string):
  boolean {
  return this.registroForm.controls[campoRegistro].errors?.[
    validacion] && this.registroForm.controls[campoRegistro].touched;
}


}
