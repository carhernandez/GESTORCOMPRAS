import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoDocumento } from 'src/app/interface/tipoDocumento';
import { Usuario } from 'src/app/interface/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TipoDocumentoService } from 'src/app/servicios/tipoDocumento/tipo-documento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  registroForm!: FormGroup;
  tipoDocumento!: TipoDocumento[];
  user!: Usuario;

  constructor(
    private modal: NgbModal,
    public fb: FormBuilder,
    public userService: AuthService,
    public tipodocumentoservice: TipoDocumentoService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      tipoDocumento: [null, Validators.required],
      nDocumento: [null, Validators.required],
      nombres: [null, Validators.required],
      apellidos: [null, Validators.required],
      correo: [null, Validators.required, Validators.email],
      contrasena: [null, Validators.required, Validators.minLength(5)],
      contrasena1: [null, Validators.required],
    });
    this.tipodocumentoservice.getAllDocTypes().subscribe(
      (resp) => {
        this.tipoDocumento = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  guardar(): void {

    let contra= this.registroForm.controls['contrasena'].value;
    let contra1= this.registroForm.controls['contrasena1'].value;

    if (contra === contra1){

        this.userService.saveUser(this.registroForm.value).subscribe(
      (resp) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro Exitoso',
          showConfirmButton: false,
          timer: 1500
        })
        this.modal.dismissAll();
        // this._router.navigate(['/login']);
        this.registroForm.reset();
      },
      (error) => {
        console.error(error);
      }
    );
    }else{
      //window.alert("contraseña no valida")};
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las Contraseñas No Coinciden!',
      })
    }
  }

  openCentrado(contenido?: any) {
    this.modal.open(contenido, { centered: true });
  }
}
