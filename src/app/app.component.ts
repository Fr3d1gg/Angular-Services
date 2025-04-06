import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { RevenueComponent } from "./revenue/revenue.component";
import { LossesComponent } from "./losses/losses.component";
import { RevenueService } from './revenue/revenue.service';
import { LossesService } from './losses/losses.service';
import { revenue } from './revenue/revenue.model';
import { losses } from './losses/losses.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormComponent, RevenueComponent, LossesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tablero';
  revenueApp:revenue[]=[];
  lossesApp:losses[]=[];
  constructor(private revenueService:RevenueService,private lossesService:LossesService){
    this.revenueApp=revenueService.revenueInformation;
    this.lossesApp=lossesService.losses;
  }
  //Method of Revenues
  getTotalRevenue():number{
    let total:number=0;
    this.revenueApp.forEach((element)=>{
      total+=element.money;
    });
    return total;
  }
  //Method of Losses
  getTotalLosses():number{
    let total:number=0;
    this.lossesApp.forEach((element)=>{
      total+=element.money;
    });
    return total;
  }
  //Global total
  getGlobalTotal():number{
    return this.getTotalRevenue()-this.getTotalLosses();
  }
  //PercentLosses
  getPercentLosses():number{
    return this.getTotalLosses()/this.getGlobalTotal();
  }
}
