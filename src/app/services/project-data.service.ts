import { Injectable } from '@angular/core';
import { Project } from '../Project';
import { BehaviorSubject } from 'rxjs';

//service
import { HomeFinderService } from './home-finder.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService{
  private projectList = new BehaviorSubject<Project[]>([]);
  text: string;

  //populate the dataservice with the initial data set
  constructor (private homeService: HomeFinderService){
    this.loadInitialProjects();
    this.loadInitialHeaderText();
  }

  //set the initial value of the text
  loadInitialHeaderText() {
    this.text = "Featured Projects:";
  }

  //return the text that should be being displayed if a search term has/hasnt been entered
  grabText(){
    return this.text;
  }

  //use the network service to retrieve the project data from the backend
  loadInitialProjects() {
    this.homeService.getHomeResults()
        .subscribe(
            res => {
              //update the projectList to anyone who might be watching
              this.projectList.next(res);
            },
            err => console.log("Error retrieving Project List")
        );

}

//use the network service to retrieve the project data from the backend using a search term
loadSearchProjects(query: string) {
  if(query != ''){
    this.text = "Projects Matching: " + query;
  this.homeService.getSearchResults(query)
      .subscribe(
          res => {
            //update the projectList to anyone who might be watching
              this.projectList.next(res);
          },
          err => console.log("Error retrieving Project List")
      );
        }

}

//ensure that the project list stored in the dataservice is an observable 
get getProjects() {
  return this.projectList.asObservable();
}

}
