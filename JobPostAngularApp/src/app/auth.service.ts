import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BadInputError } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';
import { UnAuthorizeError } from './common/unauthorize-error';
import { AppError } from './common/app-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://localhost:44365/api/account/";

  constructor(private http:HttpClient) { }

  registration(resource:any){
    return this.http.post(this.url+'signup',resource).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  login(credentials:any){
    return this.http.post(this.url+"login",credentials).pipe(
      map((response:any) => {
        if(response && response.result){
          localStorage.setItem('token', response.result);
          return true;
        }
        else{
          return false;
        }
        
      }),
      catchError(this.handleError)
    );
  }

  logout(){

  }
  isLoggedIn(){
    if(localStorage.getItem('token') != null){
      return true;
    }
    else{
      return false;
    }
  }


  handleError(error:Response){
    if(error.status === 400){
      return throwError(new BadInputError(error))
    }
    else if(error.status === 404){
      return throwError(new NotFoundError(error));
    }else if(error.status === 401){
      alert("jsjsbdjbsdjbd");
      return throwError(new UnAuthorizeError(error));
    }
    else{
      return throwError(new AppError(error.json));
    }
  }
}
