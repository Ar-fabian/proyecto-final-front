import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  stores:string[]=['Centro Mayor','Plaza De Las Americas','Plaza Central']; 

  constructor( private crudService: CrudService) { }

  ngOnInit(): void {
  }

listProductsByStore( query:string){
    console.log( query );
    this.crudService.listProductsByStore( query );
  }
}
