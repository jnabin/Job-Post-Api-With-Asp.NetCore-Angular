import { PostService } from './../Post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
  form:any;
  jobid:any;
  constructor(private fb:FormBuilder, private service:PostService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      salary:['', Validators.required],
      location:['', Validators.required],
      workinghour:['', Validators.required],
    })
  }

  get name(){
    return this.form.get('name');
  }
  get description(){
    return this.form.get('description');
  }
  get salary(){
    return this.form.get('salary');
  }
  get location(){
    return this.form.get('location');
  }
  get workinghour(){
    return this.form.get('workinghour');
  }

  submitForm(formValue:any){
    this.service.createJob(formValue).subscribe(job => {
      this.router.navigate(['/detailsJob', job])
    });
  }

}
