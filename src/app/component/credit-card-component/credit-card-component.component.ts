import { CardComponent } from './../card/card.component';
import { Component, Input, OnInit } from '@angular/core';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

import {
  faCaretRight,
  faCheck,
  faCreditCard,
  faMarker,
} from '@fortawesome/free-solid-svg-icons';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-credit-card-component',
  templateUrl: './credit-card-component.component.html',
  styleUrls: ['./credit-card-component.component.scss'],
})
export class CreditCardComponentComponent {
  public icon = faCreditCard;
  public mark = faCheck;
  public check = false;
  @Input() public cardNumber!: string;
  @Input() public placeHolder = 'Enter Your Credit-Card-Number';

  ngOnInit() {
    if (this.cardNumber.length === 16) {
      this.check = true;
    } else {
      this.check = false;
    }
  }
}
