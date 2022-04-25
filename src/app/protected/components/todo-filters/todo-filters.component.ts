import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Params, Mall } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit {
  @Input() malls:string[]=[];
  @Input() myObjects:Mall[]=[];
  reset:boolean = false;
  params:Params={
    mallSelected:'',
    productSearch:''
  }
  paramsClone:Params={
    mallSelected:'',
    productSearch:''
  }
  @ViewChild('searchBar') query!:ElementRef<HTMLInputElement>;

  @Output() newQuery: EventEmitter<Params> = new EventEmitter;
  @Output() newMall: EventEmitter<boolean> = new EventEmitter;

  ngOnInit(): void {
  }
  setMall( mall:string ){
    if(this.paramsClone.mallSelected != mall && this.paramsClone.mallSelected != '' && this.myObjects.length>0){

      Swal.fire({
        title: 'Se perdera el presupuesto actual',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        confirmButtonColor: 'Red',
      }).then((result) => {
        if (result.isConfirmed) {
          this.newMall.emit(this.reset = true);
          this.params.mallSelected = mall;
          console.log(this.params);
        }
      });
    }else{
      this.params.mallSelected = mall;
      console.log(this.params);
    }
  }
  validateQuery(){
    if(this.params.mallSelected === ''){
      Swal.fire('','Por favor seleccione un centro comercial','error');
      return false
    }else{ 
      if(this.params.productSearch === ''){
        Swal.fire('','Por favor ingrese un producto','error');
        return false
      }else{ return true}
    }
  }
  sendQuery(){
    const query = this.query.nativeElement.value.toLowerCase();
    this.params.productSearch = query;
    if(this.validateQuery()){
      this.paramsClone = Object.assign({},this.params);
      this.newQuery.emit( this.params );
      this.query.nativeElement.value ='';
      this.params.productSearch='';
    }
  }


}
