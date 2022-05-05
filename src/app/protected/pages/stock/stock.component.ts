import { Component, OnDestroy, OnInit } from '@angular/core';
import { MallService } from '../../services/mall.service';
import { Mall } from '../../interfaces/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnDestroy{

  mallsByQuery:Mall[]=[];
  listObservers:Subscription[]=[];
  selectedMall:boolean=false;

  constructor( private mallService:MallService) { }


  listStoreByMall( query:string){

      const listStoreByMall = this.mallService.listStoreByMall( query )
          .subscribe(resp => {
            if( resp.ok === true){
              this.mallsByQuery = resp.malls!;
            }
          });
    this.listObservers.push(listStoreByMall);
  }

  eventBack( flag:boolean ){
    this.selectedMall = flag;
  }

ngOnDestroy(): void {
  this.listObservers.forEach( observer=>{
    observer.unsubscribe();
  });
}


}
