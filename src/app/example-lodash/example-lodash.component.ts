import { Component, OnInit } from '@angular/core';
import { isEmpty, orderBy } from 'lodash';

@Component({
  selector: 'app-example-lodash',
  templateUrl: './example-lodash.component.html',
  styleUrls: ['./example-lodash.component.css']
})
export class ExampleLodashComponent implements OnInit {
  public users: any = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
  public data: any[];
  constructor() {
    console.log(isEmpty({})); // returns true
  }

  ngOnInit() {
  }

  sortBy() {
    this.data = orderBy(this.users, ['user', 'age'], ['asc', 'desc']);
  }

}
