import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponentComponent } from './modulos/layout/layout-component/layout-component.component';
import { LayoutLoginComponent } from './modulos/layout/layout-login/layout-login.component';
import { HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LayoutComponentComponent,
    LayoutLoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
