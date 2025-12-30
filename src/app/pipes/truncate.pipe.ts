import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string = '', length: number = 50): string {
    let availableChar = value.slice(0, length);
    if (value.length > length) {
      availableChar += '...';
    }
    return availableChar;
  }
}
