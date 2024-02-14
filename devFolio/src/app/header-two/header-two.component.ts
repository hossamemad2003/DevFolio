import { Component } from '@angular/core';
import { ViewServiceService } from '../view-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
})
export class HeaderTwoComponent {
  constructor(private view: ViewServiceService, private route: Router) {}
  changeView() {
    if (this.view.ViewOnePage) {
      this.view.ViewOnePage = false;
    } else {
      this.view.ViewOnePage = true;
    }
    this.route.navigate(['home']);
  }
}
