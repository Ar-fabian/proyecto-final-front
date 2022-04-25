import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showMenu:boolean = false;
  get user(){
    return this.authService.user;
  }
  constructor( private router: Router,
               private authService: AuthService) { }

  toggleMenu(){
    this.showMenu = !this.showMenu;    
  }
  openMap(){
    this.router.navigateByUrl('/map/screen');
  }

  logOut(){
    this.router.navigateByUrl('/auth/login');
    this.authService.logOut();
  }
}

