import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('
//whispering-spire-53803.herokuapp.com/ranking/all');
  }

  updateAll(rankingList:Array<any>){
    this.http.post('
//whispering-spire-53803.herokuapp.com/ranking/update_all', 
    rankingList)
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {
      console.log("Error", error);
      });
  }
}
