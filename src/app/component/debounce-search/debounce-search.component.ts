import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';


@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent  {
  public icon = faTimes;
  @Input() public searchKeyDisplay = false;
  @Input() public updateSearchValue = '';
  @Input() public searchTerm = '';
  @Input() public placeHolder = '';
  @Output() public searchUpdate = new EventEmitter<string>();
  public searchUpdate$ = new Subject<string>();

  constructor(){
    this.searchUpdate$.pipe(
      debounceTime(250),
      distinctUntilChanged()
    ).subscribe((value)=> this.searchUpdate.emit(value))
  }

  public updateSearchTerm(term : string){
    this.searchUpdate$.next(term)
  }
}
