import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modulos/auth/login/login.component';
import { BarraBusquedadComponent } from './modulos/componentes/barraBusquedad/barra-busquedad.component';
import { ModalComponent } from './modulos/componentes/modal/modal.component';
import { ProductosComponent } from './modulos/componentes/productos/productos/productos.component';
import { LayoutComponentComponent } from './modulos/layout/layout-component/layout-component.component';
import { LayoutLoginComponent } from './modulos/layout/layout-login/layout-login.component';

const routes: Routes = [
   {
    path: '', component: LoginComponent,
   },

  {
        path: '', component: LayoutLoginComponent,

        children: [
            { path: '', loadChildren: () => import('src/app/modulos/auth/auth.module').then(m => m.AuthModule) }
        ]
    },
    {
        path: '',
        component: LayoutComponentComponent,
        children: [
            {
                path: '', loadChildren: () => import('src/app/modulos/componentes/componente.module')
                    .then(m => m.ComponenteModule)
            },

        ]
    },
    {
      path: 'modal', component: ModalComponent,
     },
     {
      path: 'productos', component: ProductosComponent,
     },

     {
      path: 'barraBusqueda', component: BarraBusquedadComponent,
     },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
