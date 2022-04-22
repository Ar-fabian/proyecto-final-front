import { Component, OnInit } from '@angular/core';
import { MallService } from '../../services/mall.service';
import { Subscription } from 'rxjs';
import { Mall } from '../../interfaces/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  listObservers:Subscription[]=[];
  products:Mall[]=[];
  constructor( private malllService:MallService) { }

  ngOnInit(): void {
  }

  searchProduct( query:string ){
    const pricesCompare = this.malllService.pricesCompare( query )
    .subscribe(resp =>{
      if(resp.ok === true){
        console.log(resp);
        console.log(resp.malls);
        this.products = resp.malls!;
      }
    });
    this.listObservers.push( pricesCompare );
  }

  ngOnDestroy(): void {
    this.listObservers.forEach( observer=>{
      observer.unsubscribe();
    });
  }
}
