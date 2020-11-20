import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../interfaces/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  data:Product = {
    _id:"",
    name: "",
    description: "",
    sku: "",
    price: 0,
    category:{name:""}
  }

  @Input()
  seeDetail:boolean=true;

  @Output()
  reload = new EventEmitter();

  constructor() { }

  remove(){
    this.reload.emit();
  }
  ngOnInit(): void {
  }

}
