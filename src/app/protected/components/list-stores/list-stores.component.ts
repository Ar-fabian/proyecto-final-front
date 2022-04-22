import { Component, Input, SimpleChange } from '@angular/core';
import { Mall } from '../../interfaces/interfaces';

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss']
})
export class ListStoresComponent{

  @Input() stores:Mall[]=[]
  ngOnChanges(changes: SimpleChange): void {
  }
}
