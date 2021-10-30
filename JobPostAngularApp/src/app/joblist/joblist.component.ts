import { PostService } from './../Post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  jobList:any;
  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.service.getJobs().subscribe(jobs => this.jobList = jobs)
  }

}
