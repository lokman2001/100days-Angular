import { Component, Input, OnInit, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from 'src/app/interface/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  public icon = faChevronDown;
  @Input() public items: Accordion[] = [];

  toggleIsExpanded(item: Accordion): void {
    console.log(item.isExpanded);
    item.isExpanded = !item.isExpanded;
    console.log(item.isExpanded);
  }
}
