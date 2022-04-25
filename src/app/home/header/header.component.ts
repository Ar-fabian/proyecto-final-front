import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../script.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private _Script:ScriptService,
               private router:Router)
  {
   _Script.Carga(["efecto/index"]);
  }
  ngOnInit(): void {
  }
  login(){
    this.router.navigateByUrl('/auth');
  }
  signUp(){
    this.router.navigateByUrl('/auth/register');
  }

}
