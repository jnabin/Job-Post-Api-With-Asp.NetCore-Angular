import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../Post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletejob',
  templateUrl: './deletejob.component.html',
  styleUrls: ['./deletejob.component.css']
})
export class DeletejobComponent implements OnInit {

  constructor(private service:PostService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.deleteJob(Number(id)).subscribe(result => {
      this.router.navigate(['/home']);
    });
  }

}
