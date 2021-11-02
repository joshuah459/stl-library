import { Component } from '@angular/core';

//services
import { HomeFinderService } from 'src/app/services/home-finder.service';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-search-bar-container',
  templateUrl: './search-bar-container.component.html',
  styleUrls: ['./search-bar-container.component.css']
})
export class SearchBarContainerComponent{
  queryTerm: string = '';
  constructor(private homeService: HomeFinderService, private dataService: ProjectDataService) { }

  //on button press or return key, have the data service search for a string called queryTerm
  searchThis(){
   this.dataService.loadSearchProjects(this.queryTerm);
  }

}
