import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.css']
})
export class ExamplePipeComponent implements OnInit {
  public currDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
