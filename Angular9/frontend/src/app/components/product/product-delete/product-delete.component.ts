import { HeaderService } from './../../../service/header.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product-create';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Deletar Produto',
      icon: 'delete',
      routeUrl: '/products/delete'
    }
   }

  ngOnInit() {
    const id = this.route.snapshot.params['id']

    this.service.getById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct() {
    return this.service.deleteProduct(this.product).subscribe(() => {
      this.service.showAlert('Produto deletado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancelDelete() {
    return this.router.navigate(['/products'])
  }

}
