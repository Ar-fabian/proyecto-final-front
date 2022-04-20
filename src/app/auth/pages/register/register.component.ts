import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  myForm:FormGroup = this.fb.group({
    name:['test5', [Validators.required, Validators.minLength(3)]],
    email:['test5@test.com', [Validators.required, Validators.email]],
    password:['123456', [Validators.required, Validators.minLength(6)]],
  })

  constructor( private fb:FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  register(){
    const {name, email, password} = this.myForm.value;
    this.authService.register(name, email, password)
        .subscribe( resp => {
          if(resp.ok === true ){
            this.router.navigateByUrl('/dashboard');
          }else{
            Swal.fire('Error', resp.msg, 'error')
          }
        })
  }
}
