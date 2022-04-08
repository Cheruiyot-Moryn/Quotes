import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeQuote'
})

export class DateCountPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }}

export class TimeQuotePipe implements PipeTransform {

  transform(value: any): number {

    let currentDate = new Date();

    let dateDifference = currentDate.getTime() - value.getTime();

    dateDifference=dateDifference /(24*60*60*1000);

    return Math.ceil(dateDifference)-1;
  }

}