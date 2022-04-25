import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maps-btns',
  templateUrl: './maps-btns.component.html',
  styleUrls: ['./maps-btns.component.scss']
})
export class MapsBtnsComponent implements OnInit {
  @Input() maps:string[]=[];
  constructor() { }

  @Output() map:EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
  getMarkerByMall( mall:string){
    this.map.emit(mall);
  }

}
