import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() public items!: any[];
  public searchKey = '';
  public searchTerm = '';
  public selected!: boolean;

  public getSearchKey(value: string) {
    this.selected = false;
    this.searchKey = value;
  }
  public select(value: string) {
    this.searchTerm = value;
    this.selected = true;
  }
}
