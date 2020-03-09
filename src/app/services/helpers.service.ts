import {Injectable, wtfCreateScope} from '@angular/core';

@Injectable()
export class HelpersService {

  constructor() { }

  sum(a, b) {
    const _a = Number(a);
    const _b = Number(b);
    return  (_a + _b);
  }
}
