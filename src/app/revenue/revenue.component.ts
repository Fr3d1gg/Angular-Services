import { Component } from '@angular/core';
import { revenue } from './revenue.model';
import { RevenueService } from './revenue.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-revenue',
  imports: [CommonModule],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})
export class RevenueComponent {
  revenueComponent:revenue[]=[];
  constructor(private revenueService:RevenueService){
    this.revenueComponent=revenueService.revenueInformation;
  }
  deleteRevenue(revenue:revenue){
    this.revenueService.delete(revenue);
  }
}
