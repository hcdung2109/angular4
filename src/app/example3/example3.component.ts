import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {stringDistance} from 'codelyzer/util/utils';
import {EndErrorLine} from 'tslint/lib/verify/lines';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {
  // khai bao nhận
  @Input('input_1') input_1: string;
  @Input('input_2') input_2: string;
  /*
  * khai bien de gửi dữ liệu tới Comp Parent
  * Module events cung cấp cho bạn lớp EventEmitter, nó là một lớp trung tâm trong NodeJS hỗ trợ định nghĩa ra một sự kiện,
  *  đăng ký các Listener (Đối tượng lắng nghe) sự kiện này, và phát ra (emit) sự kiện.
  * */

  @Output('dataChild') sendData = new EventEmitter();
  public txtName = '';
  constructor() { }

  ngOnInit() {
  }

  btnSendDateToParent() {
    const data = this.txtName;
    this.sendData.emit(data);
  }

}
