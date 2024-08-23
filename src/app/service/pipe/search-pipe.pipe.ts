import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(datalist:any[], searchQuery:string): any {
    if(!datalist) return [];
    if(searchQuery==undefined || searchQuery=='') return datalist;
    searchQuery=searchQuery.toLowerCase();
    return datalist.filter((i)=>{
      return i.name.toLowerCase().includes(searchQuery) || i.email.toLowerCase().includes(searchQuery)
      || i.department.toLowerCase().includes(searchQuery);
    })
  }

}
