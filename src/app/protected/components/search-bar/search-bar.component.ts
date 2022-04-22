import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @ViewChild('searchBar') query!:ElementRef<HTMLInputElement>;

  @Output() newQuery: EventEmitter<string> = new EventEmitter;
  
  sendQuery(){
    const product = this.query.nativeElement.value;
    this.newQuery.emit( product );
    this.query.nativeElement.value ='';
  }

}
