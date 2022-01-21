import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transference } from '../models/transference.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private url = 'http://localhost:5001/transference';
  private transferenceList: Array<any>

  constructor(private http: HttpClient) {
    this.transferenceList = [];
  }

  get transferences() {
    return this.transferenceList
  }

  todas(): Observable<Array<Transference>> {
    return this.http.get<Array<Transference>>(this.url);
  }



  add(transference: Transference): Observable<Transference> {
    this.addResources(transference)
    //this.transferenceList.push(transference);
    return this.http.post<Transference>(this.url, transference)

  }

  private addResources(transference: any) {
    transference.date = new Date();
  }

}
