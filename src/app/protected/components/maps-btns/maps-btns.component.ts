import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maps-btns',
  templateUrl: './maps-btns.component.html',
  styleUrls: ['./maps-btns.component.scss']
})
export class MapsBtnsComponent implements OnInit {
  maps:string[]=['Plaza de las Americas','Centro Mayor','Plaza central','Gran Estacion','Centro Comercial Andino'];
  constructor() { }

  @Output() map:EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
  getMarkerByMall( mall:string){
    this.map.emit(mall);
  }

}
