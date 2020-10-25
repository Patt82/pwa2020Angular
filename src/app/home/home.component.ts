import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Hola Mundo";
  modificado = false;
  desactivar = false;
  nombrePersona = "Pat";
  numero;
  intentos = 5  ;
  mensaje = "";
  secretNum = 5;

  constructor() { }

  cambiarTitle() {
    this.title = "Hola Pat";
    this.modificado = true;
  }
  adivinar() {
    this.intentos--;
    if (this.intentos > 0) {
      if (this.numero > this.secretNum) {
        this.mensaje = "Elegí un número más bajo";
      } else if (this.numero < this.secretNum) {
        this.mensaje = "Elegí un número más alto";
      } else {
        this.mensaje = "Ganaste!";
        this.desactivar = true;
      }
    } else {
      this.desactivar = true;
      this.mensaje = "Perdiste =("
    }
    // if (this.intentos === 0) {
    //   this.desactivar = true;
    // }
  }

  ngOnInit(): void {
  }

}
