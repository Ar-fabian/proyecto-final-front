import { Component, Input, OnInit } from '@angular/core';
import { Mall } from '../../interfaces/interfaces';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() products:Mall[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }
}
