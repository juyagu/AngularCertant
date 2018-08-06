import { Component, OnInit } from '@angular/core';

import { Producto } from '../entities/index';

import { ProductosService } from '../servicios/index';



@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  productos: Producto[];
  productoSeleccionado: Producto;
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productosService.getProductos()
      .subscribe(productos => this.productos = productos);
  }

  getDetalle(id: number) {
    this.productosService.getProductoXid(id)
      .subscribe(producto => this.productoSeleccionado = producto);
  }


}
