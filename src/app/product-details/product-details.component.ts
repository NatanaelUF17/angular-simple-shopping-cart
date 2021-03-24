import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../models/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  product: any;

  ngOnInit(): void {
    const productId: number = +this.route.snapshot.paramMap.get('id')!;
    this.product = PRODUCTS.find(product => product.id === productId);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
