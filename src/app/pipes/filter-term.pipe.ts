import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
  transform(item: string[], search: string = ''): string[] {
    return item.filter((value) => value.toLowerCase().includes(search.toLowerCase()));
  }
}
