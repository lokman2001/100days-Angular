import { CreditCardFormaterPipe } from './credit-card-formater.pipe';

describe('CreditCardFormaterPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardFormaterPipe();
    expect(pipe).toBeTruthy();
  });
});
