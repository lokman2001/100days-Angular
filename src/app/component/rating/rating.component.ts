import { Component, Input } from '@angular/core';
import {
  faStarHalfAlt,
  faStar as fullstar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as emptystar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() public rating = 5;
  public fullStarIcon = fullstar;
  public emptyStarIcon = emptystar;
  public HalfStarIcon = faStarHalfAlt;

  public get fullStar(): number[] {
    const totalFullStar = Math.floor(this.rating);
    return Array(totalFullStar).fill(0);
  }

  public get halfStar(): boolean {
    const isHalfStar =
      this.rating - Math.floor(this.rating) >= 0.5 && this.rating !== 5;
    return isHalfStar;
  }
  public get emptyStar(): number[] {
    const hightestRating = 5;
    const totalEmptyStar = Math.floor(hightestRating - this.rating);
    return Array(totalEmptyStar).fill(0);
  }
}
