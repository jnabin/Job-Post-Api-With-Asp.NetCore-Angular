import { PostService } from './../Post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsjob',
  templateUrl: './detailsjob.component.html',
  styleUrls: ['./detailsjob.component.css']
})
export class DetailsjobComponent implements OnInit {
  job:any;
  constructor(private service:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.jobById(id).subscribe(job => {
      console.log(job);
      this.job = job;
    });
  }

}
