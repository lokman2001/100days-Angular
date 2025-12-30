import { Component, Input } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public title = '';
  @Input() public subtitle = '';
  @Input() public icon!: IconDefinition;
  @Input() public iconEnable: boolean = false;
}
