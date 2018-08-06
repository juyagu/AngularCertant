import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Producto } from '../entities/index';

import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable()
export class ProductosService {
  private url: string = environment.url;

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '/obtenerTodos');
  }

  getProductoXid(id: number): Observable<Producto> {
    const params = 'params=' + JSON.stringify(id);
    return this.http.post<Producto>(this.url + '/buscarProducto', params, httpOptions);
  }

  modificarProducto(producto: Producto): Observable<string> {
    const params = 'params=' + JSON.stringify(producto);
    return this.http.post<string>(this.url + '/modificarProducto', params, httpOptions);
  }
}
