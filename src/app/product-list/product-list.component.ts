import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products: any[] = PRODUCTS;

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
  }

}
