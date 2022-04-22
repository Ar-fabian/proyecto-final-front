import { Component, OnDestroy, OnInit } from '@angular/core';
import { MallService } from '../../services/mall.service';
import { Mall } from '../../interfaces/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit ,OnDestroy{

  malls:string[]=[];
  mallsByQuery:Mall[]=[];
  listObservers:Subscription[]=[];

  constructor( private mallService:MallService) { }

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
  listStoreByMall( query:string){
      const listStoreByMall = this.mallService.listStoreByMall( query )
          .subscribe(resp => {
            if( resp.ok === true){
              this.mallsByQuery = resp.malls!;
            }
          });
    this.listObservers.push(listStoreByMall);
  }

ngOnDestroy(): void {
  this.listObservers.forEach( observer=>{
    observer.unsubscribe();
  });
}


}
