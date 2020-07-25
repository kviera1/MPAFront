import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsersData {
  id: number;
  typeName: string;
}


@Injectable({
  providedIn: 'root'
})
export class JobTypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//whispering-spire-53803.herokuapp.com/job_types/all');
  }

  createJobType(user: UsersData){

    console.log(user.id)
    console.log(user.typeName)
    this.http.post('//whispering-spire-53803.herokuapp.com/job_types/add', 

    {
      "id": user.id,
      "typeName": user.typeName
    })
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      console.log("Error", error);
      });
  } 

  deleteJobType(id:number){
    return this.http.delete(`//whispering-spire-53803.herokuapp.com/job_types/delete/${id}`, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    }); 
  }

  updateJobType(user: UsersData){
    return this.http.post(`//whispering-spire-53803.herokuapp.com/job_types/update/${user.id}`, user).subscribe(data => {
      console.log("POST Request is successful ", data);
    }, error => {
      console.log("Error ", error);
    });
  }

}
