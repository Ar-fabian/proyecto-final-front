import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  formLogin: FormGroup = this.fb.group({
    email: ['test1@test.com',[Validators.required, Validators.email]],
    password: ['123456',[Validators.required, Validators.minLength(6)]],
  });
  formRegister:FormGroup = this.fb.group({
    name:['test5', [Validators.required, Validators.minLength(3)]],
    email:['test5@test.com', [Validators.required, Validators.email]],
    password:['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private element: ElementRef) { 
}

  login(){

    const {email, password} = this.formLogin.value;
    this.authService.login( email, password)
        .subscribe( resp => {
          if(resp.ok === true ){
            localStorage.setItem('userName', resp.user?.name!);
            this.router.navigateByUrl('/protected/maps');
          }else{
            Swal.fire('Error', resp.msg, 'error')
          }
        });
  }
  register(){
    const {name, email, password} = this.formRegister.value;
    this.authService.register(name, email, password)
        .subscribe( resp => {
          if(resp.ok === true ){
            this.router.navigateByUrl('/protected/maps');
          }else{
            Swal.fire('Error', resp.msg, 'error')
          }
        })
  }

  toggleRegister(){
    const $screen = this.element.nativeElement.querySelector(".auth__screen");
    const $register = this.element.nativeElement.querySelector(".auth__register");
    const $login = this.element.nativeElement.querySelector(".auth__login");
    const $contentLogin = this.element.nativeElement.querySelector(".contentLogin");
    const $contentRegister = this.element.nativeElement.querySelector(".contentRegister");
    console.log($contentLogin);
    
    $screen.classList.toggle("screenActive");
    $register.classList.toggle("toggleRegister");
    $login.classList.toggle("toggleLogin");
    $contentLogin.classList.toggle("toggleContentLogin");
    $contentRegister.classList.toggle("toggleContentRegister");
    
  }

}
