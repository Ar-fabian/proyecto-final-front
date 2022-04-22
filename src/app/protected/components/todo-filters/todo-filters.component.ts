import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Params } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit {
  @Input() malls:string[]=[];
  params:Params={
    mallSelected:'',
    productSearch:''
  }
  @ViewChild('searchBar') query!:ElementRef<HTMLInputElement>;

  @Output() newQuery: EventEmitter<Params> = new EventEmitter;

  ngOnInit(): void {
  }
  setMall( mall:string ){
    this.params.mallSelected = mall;
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
      this.newQuery.emit( this.params );
      this.query.nativeElement.value ='';
    }

  }

}
