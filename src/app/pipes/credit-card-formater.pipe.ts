import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormater',
})
export class CreditCardFormaterPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!cardNumber) {
      return '';
    }

    if (!this.hasCorrectLength(cardNumber)) {
      return 'invalid card number.';
    }

    if (!this.isAllNumber(cardNumber)) {
      return 'invalid characters.';
    }

    return this.formatCardNumber(cardNumber);
  }

  private isAllNumber(cardNumber: string): boolean {
    return /^[0-9]+$/.test(cardNumber);
  }

  private hasCorrectLength(cardNumber: string): boolean {
    return cardNumber.length === 16;
  }

  private formatCardNumber(cardNumber: string): string {
    return cardNumber.match(/.{1,4}/g)!.join('-');
  }
}

// private isAllNumber(cardNumber: string): boolean {
//   const stringNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   const totalValidNumber = cardNumber
//     .split('')
//     .filter((char) => stringNumber.includes(char)).length;
//   return totalValidNumber === cardNumber.length;
// }
// private hasCorrectLength(cardNumber: string): boolean {
//   const standardCreditCardLength = 16;
//   if (cardNumber.length === standardCreditCardLength) {
//     return true;
//   }
//   return false;
// }
// private formatCardNumber(cardNumber: string): string {
//   return cardNumber
//     .replace(/\s+/g, '')
//     .match(/.{1,4}/g)!
//     .join('-');
// }
