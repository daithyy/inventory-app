import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products : Product[];

  constructor() {
    this.products = Array<Product>
    (
      new Product('MYSHOES',
      'Black Running Shoes',
      '/resources/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'], 109.99),
      new Product('NEATOJACKET',
      'Blue Jacket',
      '/resources/images/products/black-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
      new Product('NICEHAT',
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accesories', 'Hats'], 29.99)
    );
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
