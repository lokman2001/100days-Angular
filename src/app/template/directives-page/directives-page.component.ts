import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss'],
})
export class DirectivesPageComponent {
  public debounceClickEvent = '';
  public faInfo = faInfoCircle;
  public cardIconEnable = true;

  public log() {
    this.debounceClickEvent += '-click-';
  }
  public reset() {
    this.debounceClickEvent = '';
  }
}
