import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(figurines : any[], order : string): any [] {
    return figurines.sort((a : any, b: any) =>{
      if(order === 'asc'){
        return a.price - b.price
      }else if(order === 'desc'){
        return b.price - a.price
      }else{
        return 0
      }
    }) ;
  }

}
