import { HeaderService } from './../../../service/header.service';
import { Product } from './../../../model/product-create';
import { Router } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private service: ProductService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Criar Produto',
      icon: 'add_shopping_cart',
      routeUrl: '/products/create'
    }
   }

  ngOnInit(): void {
  }

  createProduct() {
    return this.service.postProduct(this.product).subscribe(() => {
      this.service.showAlert('Produto criado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancelCreateProduct() {
    return this.router.navigate(['/products'])
  }

}
