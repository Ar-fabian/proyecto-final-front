import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './guards/validate-token.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'protected',
    loadChildren: ()=> import('./protected/protected.module').then(m => m.ProtectedModule),
    // canActivate:[ValidateTokenGuard],
    // canLoad:[ ValidateTokenGuard]
  },
  {
    path:'map',
    loadChildren:()=> import('./maps/maps.module').then( m => m.MapsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
