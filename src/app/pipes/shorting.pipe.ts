import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorting',
  standalone:true
})
export class ShortingPipe implements PipeTransform {

  transform(value:string, args:number,completeWords = false, ellipsis = '...'):string {
    if (!value) return '';
    if (value.length <= args) return value;

    if (completeWords) {
      args= value.substring(0, args).lastIndexOf(' ');
    }

    return `${value.substring(0, args)}${ellipsis}`;
  }

}
