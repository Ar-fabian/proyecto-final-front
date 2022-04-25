import { NgModule } from '@angular/core';
import {ScriptService} from "./script.service"

import { HomeRoutingModule } from './home-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [  
    HeaderComponent,
    InicioComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    HomeRoutingModule,
    MatToolbarModule,
    // MatCardModule
  ],
  providers: [ScriptService],
})
export class HomeModule { }
