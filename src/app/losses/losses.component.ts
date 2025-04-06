import { Component, Input } from '@angular/core';
import { losses } from './losses.model';
import { LossesService } from './losses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-losses',
  imports: [CommonModule],
  templateUrl: './losses.component.html',
  styleUrl: './losses.component.css'
})
export class LossesComponent {
  lossesComponent:losses[]=[];
  @Input() totalLosses!:number;
  constructor (private lossesService:LossesService){
    this.lossesComponent=this.lossesService.losses;
  }
  //Delete Losses
  deleteLosses(lose:losses){
    this.lossesService.delete(lose);
  }
  //Percent Losses
  getPercent(lose:losses):number{
    return lose.money/this.totalLosses;
  }
}
