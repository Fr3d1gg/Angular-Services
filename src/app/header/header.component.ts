import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() totalRevenue!:number;
  @Input() totalLosses!:number;
  @Input() total!:number;
  @Input() percent!:number;
}
