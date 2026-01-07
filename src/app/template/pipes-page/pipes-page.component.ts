import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrls: ['./pipes-page.component.scss'],
})
export class PipesPageComponent {
  public faInfo = faInfoCircle;
  public cardIconEnable = true;

  public html = '<a href="https://www.youtube.com/">youtube</a>';

  public objectArray : {[key : string] : string }[] = [
    { content : "Facebook"},
    { content : "Youtube"},
    { content : "Twitter"},
    { content : "LinkedIn"}
  ]

  public flattenData = [2, [3], 6, 6, [8, [3, 2], 6], 7];
  public modify(): void {
    this.flattenData.push([1, [6, 7, 8, 4], 5]);
  }
  public reassign(): void {
    this.flattenData = [...this.flattenData];
  } 
  
}
