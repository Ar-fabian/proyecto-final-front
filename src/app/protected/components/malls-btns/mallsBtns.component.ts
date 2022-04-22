import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mall } from '../../interfaces/interfaces';

@Component({
  selector: 'app-mallsBtns',
  templateUrl: './mallsBtns.component.html',
  styleUrls: ['./mallsBtns.component.scss']
})
export class MallsBtnsComponent{

  @Input() malls:string[]=[];
  mallsByQuery:Mall[]=[];
  storesReady:boolean=false;

  @Output() newQuery: EventEmitter<string> = new EventEmitter();
  constructor() {}

  listStoreByMall( query:string){
    this.newQuery.emit(query);
  }
}
