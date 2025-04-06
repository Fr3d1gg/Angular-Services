import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { revenue } from '../revenue/revenue.model';
import { losses } from '../losses/losses.model';
import { RevenueService } from '../revenue/revenue.service';
import { LossesService } from '../losses/losses.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  typeOPeration="ingresoOperacion";
  description:string|null=null;
  money:number|null=null;
    constructor(private revenueService:RevenueService,private loseService:LossesService ){

    }
      operationSelected(event:Event){
      let target=event.target as HTMLSelectElement;
      this.typeOPeration=target.value;
      }
        add(){
          if(this.description!=null && this.money!=null){
              if(this.typeOPeration==="ingresoOperacion"){
                this.revenueService.revenueInformation.push(new revenue(this.description,this.money));
              }else{
                this.loseService.losses.push(new losses(this.description,this.money));
              }
          }else{
            alert("Enter valid values");
          }
          this.description=null;
          this.money=null;
        }
}
