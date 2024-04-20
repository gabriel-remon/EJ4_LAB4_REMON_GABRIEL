import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,ErrorComponent,BienvenidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  login=false;
  error=false;
  bienvenido= false
  title = 'ejercicio2';

  closeLogin(){
    this.login=false;
  }
  openLogin(){
    this.login=true;
  }

  CloseError(){
    this.error=false;
  }
  openError(){
    this.error=true;
  }

  CloseBienvenido(){
    this.bienvenido=false;
  }
  openBienvenido(){
    this.bienvenido=true;
  }
}
