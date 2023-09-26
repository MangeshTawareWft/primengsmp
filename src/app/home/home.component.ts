import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  customer: Array<any> = [];
  constructor() { }

  ngOnInit() {

    this.customer = [{
      code: 'CustCode 1',
      name: 'name 1',
      city: 'city 1',
    }, {
      code: 'CustCode 2',
      name: 'name 2',
      city: 'city 2',
    }, {
      code: 'CustCode 3',
      name: 'name 3',
      city: 'city 3',
    }, {
      code: 'CustCode 4',
      name: 'name 4',
      city: 'city 4',
    }, {
      code: 'CustCode 5',
      name: 'name 5',
      city: 'city 5',
    }];
  }

}
