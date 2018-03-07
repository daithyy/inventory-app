import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
}
