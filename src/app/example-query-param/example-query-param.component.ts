import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-example-query-param',
  templateUrl: './example-query-param.component.html',
  styleUrls: ['./example-query-param.component.css']
})
export class ExampleQueryParamComponent implements OnInit {

  constructor(private routerService: Router) { }

  ngOnInit() {
  }

  btnRedirect() {
    this.routerService.navigate(['/example-query-param'], { queryParams : {name: 'dung', age : 32}})
  }

}
