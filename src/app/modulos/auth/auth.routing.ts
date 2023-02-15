import { Route } from "@angular/router";
import { BarraNavegacionComponent } from "../componentes/barraNavegacion/barra-navegacion.component";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";


export const AppRutas: Route[] = [{


  path:'login',component:LoginComponent
},

{path: 'registro', component:RegistroComponent
}




];
