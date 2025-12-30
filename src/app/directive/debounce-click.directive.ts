import {
  Directive,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription!: Subscription;

  ngOnInit(): void {
    const debounceTimeInMs = 1000;
    this.subscription = this.clicks
      .pipe(debounceTime(debounceTimeInMs))
      .subscribe((value) => this.debounceClick.emit());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
