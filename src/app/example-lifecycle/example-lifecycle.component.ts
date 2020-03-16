import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import {HelpersService} from '../services/helpers.service';

@Component({
  selector: 'app-example-lifecycle',
  templateUrl: './example-lifecycle.component.html',
  styleUrls: ['./example-lifecycle.component.css'],
  providers: [ HelpersService ]
})
export class ExampleLifecycleComponent implements OnInit {
  public isShow = true;
  public num1: number;
  public num2: number;
  public total: number;
 constructor(private helpersService: HelpersService) {
 }
  ngOnInit() {}

  btnSum() {
    this.total = this.helpersService.sum(this.num1, this.num2);
  }
}
