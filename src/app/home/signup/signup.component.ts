import { Component } from '@angular/core';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{

  constructor( private _Signup:ScriptService)
  {
   _Signup.Carga(["efecto/index"]);
  }

}
