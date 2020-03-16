import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-example-routing',
  templateUrl: './example-routing.component.html',
  styleUrls: ['./example-routing.component.css']
})
export class ExampleRoutingComponent implements OnInit {

  constructor(private _routerService: Router) { }

  ngOnInit() {
  }
  // chuyen trang với custom url
  redirectToUrl() {
    this._routerService.navigate(['/example3']);
  }
  // chuyen trang bang url
  redirectToUrl2() {
    this._routerService.navigateByUrl('example-pipe');
  }

}
