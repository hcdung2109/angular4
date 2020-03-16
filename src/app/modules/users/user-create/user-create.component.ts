import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {


  constructor(
    private routerService: Router,
    private activedRouterService: ActivatedRoute
  ) {

  }

  ngOnInit() {
  }

  relativeTo() {
    this.routerService.navigate(['edit'], {
      relativeTo: this.activedRouterService.parent
    });
  }

}
