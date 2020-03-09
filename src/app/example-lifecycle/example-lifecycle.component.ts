import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-lifecycle',
  templateUrl: './example-lifecycle.component.html',
  styleUrls: ['./example-lifecycle.component.css']
})
export class ExampleLifecycleComponent implements OnInit {

  constructor() { }

  // chạy khi Directive/Component được khởi tạo hàm này chỉ được chạy 1 lần trước ngOnchanges
  ngOnInit() {
    console.log('comp dc khoi tao');
  }

}
