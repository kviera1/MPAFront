import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsersData {
  id: number;
  jobName: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//whispering-spire-53803.herokuapp.com/jobs/all');
  }

  createJob(user: UsersData){
    console.log(user.id)
    console.log(user.jobName)
    this.http.post('//whispering-spire-53803.herokuapp.com/jobs/add', 
    {
      "id": user.id,
      "jobName": user.jobName
    })
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      console.log("Error", error);
      });
  } 

  deleteJob(id:number){
    return this.http.delete(`//whispering-spire-53803.herokuapp.com/jobs/delete/${id}`, { responseType: 'text' }).subscribe(data => {
      console.log(data);
  });
}
}
