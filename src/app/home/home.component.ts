import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getAll()
    .subscribe(data=>{
    console.log("Data", data);
    this.products = data["docs"];
    },
    err=>{
      console.log("Err", err); 
    });
  }
  ngOnInit(): void {
  }

}
