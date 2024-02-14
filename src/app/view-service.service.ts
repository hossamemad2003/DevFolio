import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewServiceService {
  ViewOnePage: boolean;
  constructor() {
    this.ViewOnePage = true;
  }
}
