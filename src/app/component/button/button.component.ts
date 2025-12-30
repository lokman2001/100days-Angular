import { Component, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() public buttonClick = new EventEmitter<void>();
  @Input() public text = '';
  @Input() public color = '';
  @Input() public icon!: IconDefinition;

  public click() {
    this.buttonClick.emit();
  }
}
