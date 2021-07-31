import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resource';
  selectedC1: boolean = false;
  selectedC2: boolean = false;
  selectedC3: boolean = true;
  selectedC4: boolean = true;
  selectedC5: boolean = false;
  selectedC6: boolean = false;
  selectedC7: boolean = false;

  btnClickHandler(section: number){
    switch(section) {
      case 1:
        this.selectedC1 = !this.selectedC1;
        break;
      case 2:
        this.selectedC2 = !this.selectedC2;
        break;
      case 3:
        this.selectedC3 = !this.selectedC3;
        break;
      case 4:
        this.selectedC4 = !this.selectedC4;
        break;
      case 5:
        this.selectedC5 = !this.selectedC5;
        break;
      case 6:
        this.selectedC6 = !this.selectedC6;
        break;
      case 7:
        this.selectedC7 = !this.selectedC7;
        break;
    }
  }
}
