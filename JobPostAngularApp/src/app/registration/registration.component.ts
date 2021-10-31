import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchPasswordValidators } from './match-password.validators';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form:any;
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['', Validators.required],
      phonenumber:['', Validators.required],
      confirmpassword:['', Validators.required],
      address:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    },{
      validators:[MatchPasswordValidators.PasswordShouldMatch]
    });
  }
  get name(){
    return this.form.get('name');
  }
  get phonenumber(){
    return this.form.get('phonenumber');
  }
  get address(){
    return this.form.get('address');
  }
  get confirmpassword(){
    return this.form.get('confirmpassword');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }

  registration(formInput:any){
    this.auth.registration(formInput).subscribe(result => {
      this.router.navigate(['/login']);
    });
  }

}
