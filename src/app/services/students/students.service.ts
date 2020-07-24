import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//whispering-spire-53803.herokuapp.com/students');
  }
}
