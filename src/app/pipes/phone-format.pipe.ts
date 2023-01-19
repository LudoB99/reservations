import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  /**
   * Formate un numéro de téléphone du format 0000000000 au format (000) 000-0000.
   * @param number le numéro formatté
   * @returns le numéro formatté
   */

  transform(number: any) {
    number = (number + "").trim();
    let formatted = "(" + number.substring(0,3) + ") " + number.substring(3,6) + "-" + number.substring(6,10);
    return formatted;
  }
}
