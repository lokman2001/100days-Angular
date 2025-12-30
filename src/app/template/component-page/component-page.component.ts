import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Accordion } from 'src/app/interface/accordion';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss'],
})
export class ComponentPageComponent {
  public faInfo = faInfoCircle;
  public cardIconEnable = true;

  public items: Accordion[] = [
    {
      title: 'title1',
      content: 'this is content',
      isExpanded: false,
    },
    {
      title: 'title2',
      content: 'this is content',
      isExpanded: false,
    },
  ];
}
