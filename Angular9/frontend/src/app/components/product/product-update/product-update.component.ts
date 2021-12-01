import { HeaderService } from './../../../service/header.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product-create';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;
  
  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Atualizar Produto',
      icon: 'autorenew',
      routeUrl: '/products/update'
    }
   }
 
  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.service.getById(id).subscribe(product => {
      this.product = product
    });
    
    
  }

  updateProduct() {
    return this.service.putProduct(this.product).subscribe(() => {
      this.service.showAlert('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancelProduct() {
    return this.router.navigate(['/products']);
  }

}
