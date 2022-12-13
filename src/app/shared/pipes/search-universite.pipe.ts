import { Pipe, PipeTransform } from '@angular/core';
import {Universite} from "./models/universite";

@Pipe({
  name: 'searchUniversite'
})
export class SearchUniversitePipe implements PipeTransform {


  transform(data: Array<any>, searchText: string ): Array<any> {
    return data.filter(getData);
    function getData(value:any, index:any){
      if(value.nomUniv.toUpperCase().indexOf(searchText.toUpperCase()) > -1 ) {
        return data[index];
        console.log( data[index]);
      }

    };
  };

}
