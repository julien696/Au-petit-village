import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(figurines: any[], searchTerm: string): any[] {
    if(!figurines || !searchTerm) {
      return figurines;}
    else{
      return figurines.filter(figurine =>
        figurine.name.toLowerCase().includes(searchTerm.toLowerCase())
       )
      }
  }

}
