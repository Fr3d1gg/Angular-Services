import { Injectable } from '@angular/core';
import { revenue } from './revenue.model';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {
  revenueInformation:revenue[]=[new revenue('Salary',400),new revenue('Car sale',5000)];
  constructor() { }
  //delete revenue
  delete(revenue:revenue){
    const index=this.revenueInformation.indexOf(revenue);
    this.revenueInformation.splice(index,1);
  }
}
