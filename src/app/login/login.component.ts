import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule,NgClass,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  expression=false
  @Output() eventClose = new EventEmitter();

  activateRegister(){
    this.expression=false;
  }
  activateLogin(){
    this.expression=true;
  }

  close(){
    this.eventClose.emit()
  }

}
