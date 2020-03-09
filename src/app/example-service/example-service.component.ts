import { Component, OnInit } from '@angular/core';
import {HelpersService} from '../services/helpers.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-example-service',
  templateUrl: './example-service.component.html',
  styleUrls: ['./example-service.component.css'],
  providers: [
    HelpersService
  ]
})
export class ExampleServiceComponent implements OnInit {
  private a: number;
  private b: number;
  private total: number;
  private helpersService: HelpersService;
  constructor(private http: Http) {
    this.http.get('http://jsonplaceholder.typicode.com/users')
      .toPromise()
      .then(res => res.json())
      .then(resJson => console.log(resJson))
      .catch(err => console.log(err));
  }

  ngOnInit() {
  }

  btnSum() {
    const helpersService = new HelpersService();
    this.total = helpersService.sum(this.a, this.b);
  }

  btnSum2() {
    this.total = this.helpersService.sum(this.a, this.b);
  }

}
