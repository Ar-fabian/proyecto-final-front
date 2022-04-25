import { Component } from '@angular/core';
import { ScriptService } from '../script.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor( private _Home:ScriptService)
  {
   _Home.Carga(["efecto/index"]);
  }

}
