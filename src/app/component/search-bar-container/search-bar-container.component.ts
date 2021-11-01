import { Component, EventEmitter, OnInit, Output, NgModule } from '@angular/core';


@Component({
  selector: 'app-search-bar-container',
  templateUrl: './search-bar-container.component.html',
  styleUrls: ['./search-bar-container.component.css']
})
export class SearchBarContainerComponent implements OnInit {
  queryTerm: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  searchThis(){
      console.log(this.queryTerm);
  }

}
