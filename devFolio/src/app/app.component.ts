import { Component } from '@angular/core';

import { ViewServiceService } from './view-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'devFolio';
  constructor(public view: ViewServiceService) {}
}
