import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormater',
})
export class CreditCardFormaterPipe implements PipeTransform {
  transform(cardNumber: string, onlyShowLast4Digit = false): string {
    if (!cardNumber) {
      return '';
    }
    if (!this.isAllNumber(cardNumber)) {
      return 'invalid characters.';
    }
    if (!this.hasCorrectLength(cardNumber)) {
      return 'invalid card number.';
    }
    let result: string;
    if (onlyShowLast4Digit) {
      result = this.onlyShow4Digit(cardNumber);
    } else {
      result = this.formatCardNumber(cardNumber);
    }
    return result;
  }

  private isAllNumber(cardNumber: string): boolean {
    return /^[0-9]+$/.test(cardNumber);
  }

  private hasCorrectLength(cardNumber: string): boolean {
    return cardNumber.length === 16;
  }

  private formatCardNumber(cardNumber: string): string {
    return cardNumber.match(/[\s\S]{1,4}/g)!.join('-');
  }

  private onlyShow4Digit(cardNumber: string): string {
    const parts = cardNumber.match(/[\s\S]{1,4}/g) || [];
    const onlyShowLast4Digit = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }
      return 'xxxx';
    });
    return onlyShowLast4Digit.join('-');
  }
}
