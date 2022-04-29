import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MallService } from '../../services/mall.service';
import { Params, Mall } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  listObservers:Subscription[]=[];
  malls:string[]=[];
  todos:Mall[]=[];
  myObjects:Mall[]=[];
  completePrice:number = 0;
  queryClone:Params={
    mallSelected:'',
    productSearch:''
  }


  constructor(private mallService:MallService) { }

  ngOnInit(): void {
    
    const listMall = this.mallService.listMall()
    .subscribe(resp =>{
      if(resp.ok === true){
        resp.malls!.forEach( item =>{
          if(!this.malls.includes(item.mall!)){
            this.malls.push(item.mall!);
          }
        })
      }
    });
    this.listObservers.push(listMall);
  }

  total(){
    if(this.myObjects.length > 0){
      const priceNumbers:number[] = [];
    this.myObjects.forEach( item =>{
      priceNumbers.push(Number(item.price));
    });
    const priceTotal = priceNumbers.reduce((acc,item)=>{
      return acc = acc + item ;
    });
    this.completePrice = priceTotal;
    }else{
      this.completePrice = 0;
    }
    
  }
  getMall(mall:boolean){
    if(mall){
      this.myObjects=[];
      this.total();
    }
      
  }
  getTodo( query:Params){
    console.log( 'Desde el padre: ',query);
    
    this.queryClone = Object.assign({},query);    
    const productExists = this.myObjects.find(item => item.productName === query.productSearch);

    if(productExists){ 
      Swal.fire('','Este producto ya esta dentro del presupuesto','error')
    }else{
      this.mallService.getTodo( query )
      .subscribe(resp=>{
        if(resp.ok === true){
          resp.product!.unit = 1;
          this.todos.push(resp.product!);

          const myObject = Object.assign({},resp.product);
          this.myObjects.push(myObject)
          this.total();
        }
      });
    } 
  }

  processPrice( todo:Mall ){
      const originalObject = this.todos.find(element => element._id === todo._id );      
      const priceByUint = Number(originalObject?.price);
      const pricetotal = priceByUint * todo.unit!;
      const priceInString = String(pricetotal);
      todo.price = priceInString;
      this.total();
  }

  increment(todo:Mall){
    if(todo){      
      todo.unit = todo.unit! + 1;
      this.processPrice( todo );
    }
  }
  decrement(todo:Mall){
    if(todo){
      if(todo.unit! > 1){
        todo.unit = todo.unit! -1;
        this.processPrice(todo);
      }
    }
  }
  deleteTodo(todo:Mall){

    Swal.fire({
      title: '¿Borrar producto?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      confirmButtonColor: 'Red',
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.myObjects.findIndex(item => item._id === todo._id);
        this.myObjects.splice(index,1);
        Swal.fire('Producto borrado', '', 'success');
        this.total();
      }
    });


  }


}


