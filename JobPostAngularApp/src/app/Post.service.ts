import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { AppError } from './common/app-error';
import { BadInputError } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://localhost:44365/api/jobs";
  tokenheaders:HttpHeaders;
  constructor(private http:HttpClient) { 
    this.tokenheaders = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
   }

  getJobs(){  
    return this.http.get(this.url).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  createJob(resource:any){
    return this.http.post(this.url, resource, {headers:this.tokenheaders}).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  deleteJob(id:number){
    return this.http.delete(this.url + '/' + id, {headers:this.tokenheaders}).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
 
  jobById(id:number){
    return this.http.get(this.url+'/'+id).pipe(
      map((response:any) => response),
      catchError(this.handleError)
    );
  }

  editJob(resource:any, id:number){
    return this.http.put(this.url+'/'+id,resource, {headers:this.tokenheaders}).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
  /*editJobPatch(resource:any, id:number){
    return this.http.patch(this.url+'/'+id,resource).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }*/

  handleError(error:Response){
    alert(error.status);
    if(error.status === 400){
      return throwError(new BadInputError(error.json))
    }
    else if(error.status === 404){
      return throwError(new NotFoundError(error.json));
    }else{
      return throwError(new AppError(error.json));
    }
  }
}
