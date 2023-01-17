import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashLowerCase'
})
export class DashLowerCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().split(" ").join("-");
  }

}
