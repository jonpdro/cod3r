import { Router } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct() {
    return this.service.showMessage('Produto criado com sucesso!')
  }

  cancelCreateProduct() {
    return this.router.navigate(['/products'])
  }

}
