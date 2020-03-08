import { Component, OnInit } from '@angular/core';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  public isCircle = true;
  public styleCustom = { color: 'blue' , fontsize: '30px'};
  public isShow = true;
  public users = [
    { id : 1 , name: 'hoang cong dung' },
    { id : 2 , name: 'duong tu' }
  ];
  public txtName = '';
  constructor() { }

  ngOnInit() {
  }

  addUser() {
    const objUser = {
      id : this.users.length + 1,
      name : this.txtName
    };

    this.users.push(objUser);

    this.txtName = '';
  }


}
