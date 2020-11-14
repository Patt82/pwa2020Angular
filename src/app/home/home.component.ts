import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, ProductsPaginator} from "../interfaces/Product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product[]= [];

  constructor(private productsService: ProductsService) {
    this.productsService.getAll()
    .subscribe((data: ProductsPaginator)=>{
    console.log("Data", data);
    this.products = data.docs;
    },
    err=>{
      console.log("Err", err); 
    });
  }
  ngOnInit(): void {
  }

}
