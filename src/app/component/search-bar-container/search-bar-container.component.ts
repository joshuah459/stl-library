import { Component, EventEmitter, OnInit, Output, NgModule } from '@angular/core';
import { HomeFinderService } from 'src/app/services/home-finder.service';
import { ResultsContainerComponent } from '../results-container/results-container.component';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-search-bar-container',
  templateUrl: './search-bar-container.component.html',
  styleUrls: ['./search-bar-container.component.css']
})
export class SearchBarContainerComponent implements OnInit {
  queryTerm: string = '';
  constructor(private homeService: HomeFinderService, private dataService: ProjectDataService) { }

  ngOnInit(): void {
  }
  searchThis(){
   this.dataService.loadSearchProjects(this.queryTerm);
  }

}
