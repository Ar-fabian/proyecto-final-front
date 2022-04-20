import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  text:string='';
  @ViewChildren('txtQuery') txtQuery!:ElementRef<HTMLElement>
  constructor() { }

enviarNombre(){
  // console.log(this.txtQuery.nativeElement.innerText);
  console.log(this.text);
  
  
}
}
