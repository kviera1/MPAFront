import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AbsenceCodeData {
 code_id: number;
 reason: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class AbsenceCodeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('
//whispering-spire-53803.herokuapp.com/attendance_code/all');
  }

 

 

}
