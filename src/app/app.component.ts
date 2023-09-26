

import { Component } from '@angular/core';
import { LicenseManager } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Advisor-app';

  constructor() {
    localStorage.clear();
    console.log('AppComponent Load');
    LicenseManager.verify('', '');

    LicenseManager.check()
      .then((data) => { console.log(data); })
      .catch((error) => { console.log(error); });

  }


}




