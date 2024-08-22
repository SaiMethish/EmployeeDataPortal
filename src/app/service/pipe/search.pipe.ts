import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(datalist:any[], searchQuery:string): any {
    if(!datalist) return [];
    if(!searchQuery) return datalist;
    searchQuery=searchQuery.toLowerCase();
    return datalist.filter((i)=>{
      return i.name.toLowerCase()==searchQuery || i.email.toLowerCase()==searchQuery
      || i.department.toLowerCase()==searchQuery;
    })
  }

}
