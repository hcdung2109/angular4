import {Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-example-lifecycle-child',
  templateUrl: './example-lifecycle-child.component.html',
  styleUrls: ['./example-lifecycle-child.component.css']
})
export class ExampleLifecycleChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input('total') total: number;
  private perviousTotal: number;
  // chạy trước tất các hook method nhưng không phải là 1 hook method ; không nên khởi tạo các giá trị ở đây thường dùng để tiêm inject DI
  constructor() {
    console.log('child - contrutor');
  }

  // được gọi khi @INPUT (truyền dữ liệu giữa cha - con) có sự thay đổi, gọi trước ngOnInit.
  // Được quản lý thông qua đối tượng SimpleChanges (@angular/core)
  // Một số params currentValue-giá trị hiện tại, previousValue - giá trị trước đó, isFistChange - thay đổi lần đầu tiên
  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('child - ngOnChanges');
    this.perviousTotal = simpleChanges.total.previousValue;
  }

  // chạy khi Directive/Component được khởi tạo hàm này chỉ được chạy 1 lần trước ngOnchanges, thường dùng để khai bao giá trị ở đây
  ngOnInit() {
    console.log('child -  ngOnInit');
  }

  // Được gọi khi Component bị hủy, dùng để hủy các kết nối , giải phóng bộ nhớ
  ngOnDestroy(): void {
    console.log('child - ngOnDestroy');
  }

  // ngDoCheck Hook này được chạy mỗi khi Change Detection của Angular đi kiểm tra các component.
  // Hàm ngDocheck được gọi ngay lập tức sau ngOnChanges và sau ngOnInit, và cứ mỗi lần Change Detection chạy thì hàm này được gọi
  // Change Detection là cơ chế của Angular để kiểm tra sự thay đổi giá trị các property của các component.
  // Mỗi khi có 1 event nào đó xảy ra ( vd user ấn 1 button nào đó ) thì Change Detection được gọi lên chạy.
  // IMPORTANT: ngDoCheck và ngOnChanges không nên được thực hiện trong cùng 1 component.
  ngDoCheck(): void {
    console.log('child- docheck');
  }

}
