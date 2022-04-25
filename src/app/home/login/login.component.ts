import { Component } from '@angular/core';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private _Login:ScriptService)
  {
   _Login.Carga(["efecto/index"]);
  }

}
