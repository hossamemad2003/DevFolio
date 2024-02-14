import { Component } from '@angular/core';
import { ViewServiceService } from '../view-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private view: ViewServiceService) {}
  changeView() {
    if (this.view.ViewOnePage) {
      this.view.ViewOnePage = false;
    } else {
      this.view.ViewOnePage = true;
    }
    console.log(this.view.ViewOnePage);
  }
}
