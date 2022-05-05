import { NgModule } from '@angular/core';
import {ScriptService} from "./script.service"

import { HomeRoutingModule } from './home-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [  
    HeaderComponent,
    InicioComponent,
  ],
  imports: [
    HomeRoutingModule,
    MatToolbarModule,
    // MatCardModule
  ],
  providers: [ScriptService],
})
export class HomeModule { }
