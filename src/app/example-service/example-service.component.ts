import { Component, OnInit } from '@angular/core';
import {HelpersService} from '../services/helpers.service';

@Component({
  selector: 'app-example-service',
  templateUrl: './example-service.component.html',
  styleUrls: ['./example-service.component.css']
})
export class ExampleServiceComponent implements OnInit {
  private a: number;
  private b: number;
  private total: number;
  constructor() { }

  ngOnInit() {
  }

  btnSum() {
    const helpersService = new HelpersService();
    this.total =  helpersService.sum(this.a, this.b);
  }

}
