import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {
  @Output()  eventClose = new EventEmitter();

  close(){
    this.eventClose.emit();
  }
}
