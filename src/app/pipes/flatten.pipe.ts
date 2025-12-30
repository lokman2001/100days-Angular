import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false,
})
export class FlattenPipe implements PipeTransform {
  transform(arr: any[]): any[] {
    return this.flatten(arr);
  }

  private flatten(arr: any[]): any[] {
    const result: any[] = [];

    arr.forEach((value) => {
      if (Array.isArray(value)) {
        result.push(...this.flatten(value));
      }
      result.push(value);
    });

    return result;
  }
}
