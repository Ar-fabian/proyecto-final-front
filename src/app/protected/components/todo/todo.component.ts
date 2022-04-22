import { Component, Input, OnInit } from '@angular/core';
import { Mall } from '../../interfaces/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todos:Mall[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
