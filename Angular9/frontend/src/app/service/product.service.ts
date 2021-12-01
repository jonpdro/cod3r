import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  showAlert(text: string, isError: boolean = false) {
    this.snackBar.open(text, '✖', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler(_e: any): Observable<any> {
    this.showAlert('Ops! Ocorreu um erro!', true)
    return EMPTY
  }

  getById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  putProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${product.id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

}
