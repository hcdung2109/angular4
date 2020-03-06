import { Component, OnInit } from '@angular/core';

// https://v4.angular.io/api/core/Component
@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  styles: [
    `p {
      font-size: 20px;
    }`
  ]
})
export class Example1Component implements OnInit {
  public name = `hoang dung`;
  public email: string;
  public image: string;
  public users: string[] = ['Hoang Cong Dung' , 'Lam Viet Tung', 'Duong Thanh Tu'];
  private keyword: string;
  private keyword2: string;

  constructor() {
    this.email = 'hcdung@vnpt.vn';
    this.image = 'https://v4.angular.io/assets/images/logos/angular/logo-nav@2x.png';
  }

  ngOnInit() {
  }

  clickme() {
    alert('Bạn vừa nhấn click');
    this.name = 'VNPT';
  }

  showKeyword(event) {
    // console.log(event);
    this.keyword = event.target.value;
  }

}
