import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // truyền vào 1 object
  name: 'roundNumber'
})
export class RoundNumberPipe implements PipeTransform {

  transform(value: number, args?: any): number {
    return Math.round(value);
  }

}
