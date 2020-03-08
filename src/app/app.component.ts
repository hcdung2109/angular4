import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public param_2 = 'angular';

  // example 3 pass data component child to parent
  receivedDataChild(data) {
    console.log(data);
  }
}
