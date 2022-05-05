import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Mall } from '../../interfaces/interfaces';

@Component({
  selector: 'app-mallsBtns',
  templateUrl: './mallsBtns.component.html',
  styleUrls: ['./mallsBtns.component.scss']
})
export class MallsBtnsComponent{

  malls:string[]=['Plaza de las Americas','Plaza Central','Hayuelos','Gran Estacion', 'Centro Mayor', 'Centro Comercial Andino'];
  selectedMall:string='';
  showArrow:boolean = false;
  


  @Output() newQuery: EventEmitter<string> = new EventEmitter();
  @Output() eventBack: EventEmitter<boolean> = new EventEmitter();

  constructor( private element:ElementRef) {
  }
  
  
  listStoreByMall( query:string){
    this.selectedMall = query;
    this.newQuery.emit(query);
    this.eventBack.emit(true);
  }
  
  toggleClass( mall:string ){
    this.showArrow = true;
    let $Malls = this.element.nativeElement.querySelectorAll(".malls__card");
    
    $Malls.forEach( (element:HTMLElement) => {
      if(element.firstElementChild?.innerHTML === mall){
        element.classList.remove('notSelectedMall');
        element.classList.add('selectedMall');
      }else{
        element.classList.remove('selectedMall');
        element.classList.add('notSelectedMall');
      }
    });

  }
  back(){
    this.showArrow = false;
    this.eventBack.emit(false);
    let $Malls = this.element.nativeElement.querySelectorAll(".malls__card");
    $Malls.forEach( (element:HTMLElement) => {
      element.classList.remove('notSelectedMall');
      element.classList.remove('selectedMall');
    });

    
  }
}
