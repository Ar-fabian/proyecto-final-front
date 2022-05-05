import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName:string= localStorage.getItem('userName')!;
  constructor(private authService:AuthService,
              private router:Router) { }
  
  ngOnInit(): void {
    // this.userName = this.authService.user.name;
  }
  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/home');
  }

}
