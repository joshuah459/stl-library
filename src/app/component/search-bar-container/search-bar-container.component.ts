import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar-container',
  templateUrl: './search-bar-container.component.html',
  styleUrls: ['./search-bar-container.component.css']
})
export class SearchBarContainerComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  searchThis(){
    this.searchcriteria.emit(this.searchword)
  }

}
