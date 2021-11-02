import { Component, OnInit } from '@angular/core';

//import the project interface
import { Project } from 'src/app/Project';

//services
import { HomeFinderService } from 'src/app/services/home-finder.service';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.css']
})

export class ResultsContainerComponent implements OnInit {
  Projects: Project[];
  headerText: string = this.dataService.grabText();
  displayElement = true;
  displayError = false;

  constructor(private homeService: HomeFinderService, private dataService: ProjectDataService) {

  }
  //populate the results with the projects from the data service
  ngOnInit(): void {
   this.dataService.getProjects.subscribe((resp) => {
     //if an empty list is sent by the data service the results should display an error
    if(resp.length == 0){
      this.displayElement = false;
      this.displayError = true;
      
    }else {
    //if the list sent by the data service is not empty then update the local project list 
    //this will force a redrawing of the results component and any child components
    this.displayElement = true;
    this.displayError = false;
    this.Projects = resp;
    }
    //update the header text to contain the search phrase
    this.headerText = this.dataService.grabText();
  });
  }

}
