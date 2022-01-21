import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferenceList: Array<any>

  constructor() {
    this.transferenceList = [];
  }

  get transferences() {
    return this.transferenceList
  }

  add(transference: any) {
    this.addResources(transference)
    this.transferenceList.push(transference);
  }

  private addResources(transference: any) {
    transference.date = new Date();
  }

}
