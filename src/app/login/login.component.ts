import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, NgModule, Output, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LocalStorageService } from '../service/local-storage.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule,NgClass,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin= new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  formRegister= new FormGroup ({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })
  
  localStorage = inject(LocalStorageService)

  submitLogin(){
   
    console.log(
      this.localStorage.login(this.formLogin.value)
    )

  }
  submitRegister(){
    console.log(
      this.localStorage.register( this.formRegister.value)?
      "registro exitoso":"no se puedo registrar")
  }

  expression=false
  mode="password";

  changeMode(){
    this.mode = this.mode==="password"?"text":"password";
  }

  changeLogin(){
    this.expression= !this.expression;
  }

 cerrarComponenteYVolver() {
    window.history.back();
  }
}
