import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/interfaces';
import { CrudService } from '../../services/crud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  product:Product = {
    productName:'',
    stock:'',
    store:''
  }
  id:string ='';
  edit:boolean = false;

  constructor(private router:Router,
              private crudService: CrudService,
              private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params['id']){
      console.log(params['id']);
      
      this.crudService.productById( params['id'] )
      .subscribe(resp => {
        if( resp.ok === true){
          console.log('productById',resp.product );
          this.product = resp.product!
          this.id = resp.product?.pid!
          this.edit=true;
        }
      }) 
    }
  }

  updateProduct(){
    this.crudService.productUpdate( this.id ,this.product )
    .subscribe(resp => {
      if( resp.ok === true){
        Swal.fire({
          title: '',
          text: "¿Guardar producto?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Si, guardar',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              '',
              'Producto guardado',
              'success'
            )
            this.crudService.listProductsByStore( resp.product?.store!);
            console.log(resp);
            this.router.navigateByUrl('/protected/stock');
          }
        });
      }else{
        console.log(resp.msg);
        Swal.fire( '', resp.msg ,'error');
      }
    });
    
  }





  createProduct(){
   
    Swal.fire({
      title: '',
      text: "¿Guardar producto?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, guardar',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '',
          'Producto guardado',
          'success'
        )
        this.crudService.productCreate( this.product );
        this.router.navigateByUrl('/protected/stock');
      }
    })
    
    
  }

}
