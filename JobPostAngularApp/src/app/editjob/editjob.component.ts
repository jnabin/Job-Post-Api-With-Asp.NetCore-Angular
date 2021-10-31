import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from './../Post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css']
})
export class EditjobComponent implements OnInit {
  job:any;
  form:any;
  id:any;
  constructor(private service:PostService,private fb:FormBuilder, private router:Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.jobById(this.id).subscribe(job => {
      this.form = this.fb.group({
        name:[job.name, Validators.required],
        description:[job.description, Validators.required],
        salary:[job.salary, Validators.required],
        location:[job.location, Validators.required],
        workinghour:[job.workingHour, Validators.required],
      });
    });      
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
    this.service.editJob(formValue,this.id).subscribe(job => {
      this.router.navigate(['/detailsJob', this.id])
    });
  }

}
