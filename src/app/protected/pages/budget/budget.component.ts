import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MallService } from '../../services/mall.service';
import { Params, Mall } from '../../interfaces/interfaces';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  listObservers:Subscription[]=[];
  malls:string[]=[];
  todos:Mall[]=[];

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

  getTodo( query:Params){
    console.log(query);
    this.mallService.getTodo( query )
    .subscribe(resp=>{
      if(resp.ok === true){
        console.log(resp.product);
        this.todos.push(resp.product!);
      }
    });
    
  }














}


