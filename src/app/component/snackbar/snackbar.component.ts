import { Component, Input, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  @Input() public message: string = '';
  public isShow: boolean = false;

  public show(): void {
    this.isShow = true;

    const subscription = of(null)
      .pipe(delay(2900))
      .subscribe({
        complete: () => {
          this.isShow = false;
          subscription.unsubscribe;
        },
      });
  }
}
