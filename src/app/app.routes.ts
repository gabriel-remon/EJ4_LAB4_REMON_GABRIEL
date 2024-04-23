import { Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    
    // Si le ponemos 'prefix' nos va a arrojar un error en la consola de redireccion infinita
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: BienvenidoComponent },
    { path: 'error', component: ErrorComponent },
    {path: 'login', component: LoginComponent,},
    // La ruta comodin debe ir siempre al final
    { path: '**', component: ErrorComponent },
];
