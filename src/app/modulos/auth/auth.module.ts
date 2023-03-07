import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';
import { AppRutas } from './auth.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from 'express';
import { ModalComponent } from '../componentes/modal/modal.component';

@NgModule({
  declarations: [LoginComponent, RegistroComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AppRutas),
    FormsModule,
    ReactiveFormsModule,

  ],

})
export class AuthModule {}
