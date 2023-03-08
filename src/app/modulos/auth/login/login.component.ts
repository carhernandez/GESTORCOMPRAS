import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { BarraNavegacionComponent } from '../../componentes/barraNavegacion/barra-navegacion.component';
import { ModalComponent } from '../../componentes/modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  loginForm!: FormGroup;




  constructor(
    public fb:FormBuilder,
    public modal:ModalComponent,
    public authService:AuthService,
    private router: Router
  ){}

    ngOnInit(): void {

      this.loginForm=this.fb.group({
        correo:[null,Validators.required],
        contrasena:[null,Validators.required],
      })
    }

    consultar():void{

      this.authService.login(this.loginForm?.value).subscribe( resp => {
        if(resp.status === "success"){
          console.log("login exitoso")
          console.log(resp.status);
          this.router.navigate(['/home']);
        }else{
          console.log('error al iniciar sesión' + resp.message)
        }

        this.loginForm?.reset;
      },
      error => {console.error(error)}
      )
    }


    onRegistro(contenido:any)
    {
      //this.router.navigate(['/modal']);
        this.modal.openCentrado(contenido)
    }


    }

