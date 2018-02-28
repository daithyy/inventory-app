import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="inventory-app">
    
  </div>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product : Product;

  constructor() {
    this.product = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accesories', 'Hats'], 29.99);
  }
}
