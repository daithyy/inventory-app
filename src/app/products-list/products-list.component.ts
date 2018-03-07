import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  ngOnInit() {
  }

  /*
   * @input productList - the Product[] passed to us
   */
  @Input() productList: Product[];

  /*
   * @output onProductSelected - outputs the current
   *         Product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }
}
