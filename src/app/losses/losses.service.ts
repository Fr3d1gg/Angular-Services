import { Injectable } from '@angular/core';
import { losses } from './losses.model';

@Injectable({
  providedIn: 'root'
})
export class LossesService {
  losses:losses[]=[new losses('Apartment rent',900),new losses('Clothes',200)];
  constructor() { }
  //Delete Losses
  delete(lose:losses){
    const index=this.losses.indexOf(lose);
    this.losses.splice(index,1);
  }
}
