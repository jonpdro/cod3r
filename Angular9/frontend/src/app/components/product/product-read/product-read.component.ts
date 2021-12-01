import { HeaderService } from './../../../service/header.service';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product-create';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(
    private service: ProductService,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
   }

  ngOnInit(): void {
    this.service.getProduct().subscribe(products => {
      this.products = products
    })
  }

}
