import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
   this.dataService.getProjects.subscribe((resp) => {
    if(resp.length == 0){
      this.displayElement = false;
      this.displayError = true;
      this.headerText = this.dataService.grabText();
    }else {
    this.displayElement = true;
    this.displayError = false;
    this.Projects = resp;
    this.headerText = this.dataService.grabText();
    }
  });
  }

  updateProjectList(list: Project[]){
    if(list.length == 0){
      this.displayError = true;
    }else{
      this.displayElement = false;
      this.Projects = list;
      this.displayElement = true;
    }
  }

}
