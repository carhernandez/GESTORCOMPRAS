import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponentComponent } from './modulos/layout/layout-component/layout-component.component';
import { LayoutLoginComponent } from './modulos/layout/layout-login/layout-login.component';
import { ModalComponent } from './modulos/componentes/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraNavegacionComponent } from './modulos/componentes/barraNavegacion/barra-navegacion.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponentComponent,
    LayoutLoginComponent,
    // ModalComponent,
    BarraNavegacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,



  ],
  providers: [ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
