import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = environment.baseUrl;
  private localbaseUrl:string = environment.localbaseUrl;
  private _user!: User;
  
  get user(){
    return { ...this._user}
  }

  constructor(private http: HttpClient) { }

register(name:string, email:string, password:string){
  const url = `${ this.baseUrl}/user`;
  const body = { name, email, password }

  return this.http.post<AuthResponse>( url, body )
  .pipe(
    tap(resp =>{
      if( resp.ok === true ){          
        localStorage.setItem('token',resp.token!);
        this._user ={
          name: resp.user?.name!,
          uid: resp.user?.uid!,
          email: resp.user?.email!
        }
      }
    })  
  )
}

login( email: string, password:string){

  const url = `${ this.baseUrl}/auth/login`;

  const body ={ email, password };

  return this.http.post<AuthResponse>( url, body )
  .pipe(
    tap(resp =>{
      if( resp.ok === true ){          
        localStorage.setItem('token',resp.token!);
        this._user ={
          name: resp.user?.name!,
          uid: resp.user?.uid!,
          email: resp.user?.email!
        }
      }
    })    
  )
}
  

validarToken(): Observable<boolean>{
    const url = `${ this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');
     return this.http.get<AuthResponse>( url, { headers }).
      pipe(
        map( resp =>{
          localStorage.setItem('token',resp.token!);
          this._user ={
            name: resp.user?.name!,
            uid: resp.user?.uid!,
            email: resp.user?.email!
          }
          return resp.ok 
        }),
        catchError( err => of( false ))
      )
  }

logOut(){
  localStorage.clear();
}


}
