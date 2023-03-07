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
import { AuthService } from 'src/app/servicios/auth.service';
import { TipoDocumentoService } from 'src/app/servicios/tipoDocumento/tipo-documento.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  registroForm!: FormGroup;
  tipoDocumento: any;
  user: any;

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
      correo: [null, Validators.required],
      contrasena: [null, Validators.required],
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
    this.userService.saveUser(this.registroForm.value).subscribe(
      (resp) => {
        this.modal.dismissAll();
        // this._router.navigate(['/login']);
        this.registroForm.reset();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openCentrado(contenido?: any) {
    this.modal.open(contenido, { centered: true });
  }
}
