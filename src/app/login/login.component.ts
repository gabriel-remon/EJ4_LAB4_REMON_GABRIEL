import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, NgModule, Output, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LocalStorageService } from '../service/local-storage.service';
import { User } from '../models/user';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule,NgClass,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin= new FormGroup ({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  formRegister= new FormGroup ({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
  
  localStorage = inject(LocalStorageService)

  submitLogin(){
   
    
    const res = this.localStorage.login(this.formLogin.value)?"usuario logeado":"no se encontro el usuario"
    swal(res)
  }
  submitRegister(){
    swal((this.localStorage.register( this.formRegister.value)?
      "registro exitoso":"no se puedo registrar"))
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
