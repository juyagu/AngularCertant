import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../entities/index';

import { ProductosService } from '../servicios/index';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() productoSeleccionado: Producto;
  modificado = false;
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
  }

  modificarProducto() {
    this.productosService.modificarProducto(this.productoSeleccionado)
      .subscribe(response => this.modificado = true);
  }

}
