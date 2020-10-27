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

  productos = [
    {
      id: 1,
      descripcion: "Producto 1",
      precio: 1000,
    },
    {
      id: 2,
      descripcion: "Producto 2",
      precio: 1500,
    },
  ];

  class_mensaje="";

  constructor() { }

  cambiarTitle() {
    this.title = "Hola Pat";
    this.modificado = true;
  }
  adivinar() {
    this.productos = [
      {
        id: 3,
        descripcion:"Producto 3",
        precio: 2000,
      },
      {
        id: 4,
        descripcion: "Producto 4",
        precio: 2500,
      },
      {
        id: 5,
        descripcion: "Producto 5",
        precio: 3000,
      }
    ];

    this.intentos--;
    if (this.intentos > 0) {
      if (this.numero > this.secretNum) {
        this.mensaje = "Elegí un número más bajo";
        this.class_mensaje = "perdio";
      } else if (this.numero < this.secretNum) {
        this.mensaje = "Elegí un número más alto";
        this.class_mensaje = "perdio";
      } else {
        this.mensaje = "Ganaste!";
        this.class_mensaje = "gano";
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
