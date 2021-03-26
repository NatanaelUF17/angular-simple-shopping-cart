import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  items: any[] = [];
  url: any = '/assets/shipping.json';

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}>(this.url);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
