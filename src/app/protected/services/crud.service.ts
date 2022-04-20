import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CrudResponse, Product } from '../interfaces/interfaces';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private baseUrl: string = environment.baseUrl;
  private localBaseUrl: string = environment.localbaseUrl;
  private products:Product[]=[];
  constructor( private http: HttpClient) { }

  get productsList(){
    return this.products;
  }


  listProductsByStore( query:string ){
    const url = `${ this.localBaseUrl }/product/list?store=${ query }`
    return this.http.get<CrudResponse>(url)
            .subscribe(resp => {
              if( resp.ok === true){
                this.products = resp.products!;                
                if( this.products.length === 0 ) Swal.fire( '', 'No hay productos cargados' ,'info');
              }
            })          
  }
  productById( id:string ){
    const url = `${ this.localBaseUrl }/product/byId/${ id }`
    return this.http.get<CrudResponse>(url)          
  }
  productCreate( body:Product){
    const url = `${ this.localBaseUrl }/product`;
    console.log( 'body', body );
    
    this.http.post<CrudResponse>(url, body)
            .subscribe(resp => {
              console.log(resp);
              
              if( resp.ok === true){
                console.log(resp);
                this.listProductsByStore( resp.product?.store!);
              }
            }) 

  };
  productUpdate( id:string, body:Product){
    console.log('id:',id);
    const url = `${ this.localBaseUrl }/product/${ id }`
    return this.http.put<CrudResponse>(url, body)   
        
  }



  productDelete( id:string){
    const url = `${ this.localBaseUrl }/product/${ id }`
    this.http.delete<CrudResponse>(url)
        .subscribe(resp => {
          if( resp.ok === true){
            console.log(resp);
            this.products = resp.products!;
            this.listProductsByStore( resp.product?.store!);
          }
        }) 
  }
}
