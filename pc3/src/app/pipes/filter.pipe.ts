import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const search of value){
      if(search.ubicacion.toUpperCase().indexOf(arg.toUpperCase()) > -1){
         resultPosts.push(search);
      };
    };
    return resultPosts;
  }
  //Para que lo busque por nombre del alquiler
  /*transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const search of value){
      if(search.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1){
         resultPosts.push(search);
      };
    };
    return resultPosts;
  } */

}