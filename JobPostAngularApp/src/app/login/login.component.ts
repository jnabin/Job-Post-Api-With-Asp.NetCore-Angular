import { UnAuthorizeError } from '../common/unauthorize-error';
import { AppError } from '../common/app-error';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any;
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) { }
  invalidLogin:boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
    if(localStorage.getItem('token') != null){
      this.router.navigate(['/home']);
    }
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

  login(formInput:any){
    this.auth.login(formInput).subscribe(result => {
      if(result){
        this.router.navigate(['/home']);
      }else{
        this.invalidLogin = true;
      }
    },
    (error:AppError) => {
      if(error instanceof UnAuthorizeError){
        this.invalidLogin = true;
      }else{
        console.log(error);
      }
    });
  }

}
