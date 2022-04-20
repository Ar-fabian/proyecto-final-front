import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor( private crudService:CrudService,
              private router: Router) { }

  get products( ){
    return this.crudService.productsList;
  }


  ngOnInit(): void {
  }
  

  productDelete( id:string){
    Swal.fire({
      title: '¿Esta seguro?',
      text: "Se eliminara el producto ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.crudService.productDelete( id )
        Swal.fire(
          '',
          'Producto eliminado',
          'success'
        )
      }
    })
  }
}
