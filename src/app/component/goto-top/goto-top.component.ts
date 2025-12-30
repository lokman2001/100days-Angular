import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { HostListener } from '@angular/core';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goto-top',
  templateUrl: './goto-top.component.html',
  styleUrls: ['./goto-top.component.scss'],
})
export class GotoTopComponent {
  public isShown = false;
  public icon = faChevronCircleUp;

  constructor(private viewPortScroller: ViewportScroller) {}
  @HostListener('window:scroll') onWindowScroll() {
    const yCoordinate = this.viewPortScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  public gotoTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
