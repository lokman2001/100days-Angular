import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKey'
})
export class SortByKeyPipe implements PipeTransform {

  transform(value: { [key : string] : string}[] , key:string , isAsec = true ): { [key : string] : string}[] {
    if(value === null || value === undefined){
      return value
    }
    if(!Array.isArray(value)){
      throw new Error('error')
    }
    
    const values = [...value]

    return values.sort((a,b)=>{
      const Uppercased1 = a[key].toUpperCase();
      const Uppercased2 = b[key].toUpperCase();
      if(Uppercased1 < Uppercased2){
        return isAsec ? -1 : 1
      }
      if(Uppercased1 > Uppercased2){
        return !isAsec ? -1 : 1
      }
      return 0
    });
  }

}
