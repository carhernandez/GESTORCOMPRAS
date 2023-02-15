import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;


  constructor(
    public fb:FormBuilder,
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
          this.router.navigate(['/barraNavegacion']);
        }else{
          console.log('error al iniciar sesión' + resp.message)
        }

        this.loginForm?.reset;
      },
      error => {console.error(error)}
      )
    }


    onRegistro()
    {
      this.router.navigate(['/registro']);
    }


    }

