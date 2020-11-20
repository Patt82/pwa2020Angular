import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from "../interfaces/Product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    _id:"",
    name: "",
    description: "",
    sku: "",
    price: 0,
    category:{name:""}
  }

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    const id = this.route.snapshot.paramMap.get("id");

    this.productsService.getById(id)
    .subscribe((data:Product)=> {
      console.log("Data", data);
      this.product = data;
    })

  }
  ngOnInit(): void {
  }

}
