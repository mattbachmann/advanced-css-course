import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Home} from "./model/Home";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-nexter-starter';

  homes = [
    new Home('Beautiful Family House', 5, 325, 1200000, 'Boston, USA'),
    new Home('Modern Glass Villa', 6, 450, 2750000, 'Vancouver, Canada'),
    new Home('Cozy Country House', 4, 250, 850000, 'Kerry, Ireland'),
    new Home('Large Rustical Villa', 6, 480, 1950000, 'Porto, Portugal'),
    new Home('Majestic Palace House', 18, 4230, 9500000, 'Essen, Germany'),
    new Home('Modern Family Apartment', 3, 180, 600000, 'Milano, Italy'),
  ];
}
