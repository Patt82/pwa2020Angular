import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  products = [
    {
      id: 1,
      name: "Producto 1",
      price: 1000,
    }, 
    {
      id: 2,
      name: "Producto 2",
      price: 1500,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
