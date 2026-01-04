import { Component, Input, OnInit, Output } from '@angular/core';
import { ButtonMeta } from 'src/app/model/button-meta.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent {
  @Input() option: ButtonMeta[] = [];
  @Output() selection = new EventEmitter<any>();

  public selected(selectedOption: any) {
    this.selection.emit(selectedOption);
  }
}
