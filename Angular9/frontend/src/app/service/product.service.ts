import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './../model/product-create';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080/products'

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showAlert(text: string) {
    this.snackBar.open(text, '✖', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
}
