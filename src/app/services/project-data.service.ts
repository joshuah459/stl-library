import { Injectable } from '@angular/core';
import { Project } from '../Project';
import { HomeFinderService } from './home-finder.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService{
  private projectList = new BehaviorSubject<Project[]>([]);
  
  text: string;
  constructor (private homeService: HomeFinderService){
    this.loadInitialProjects();
    this.loadInitialHeaderText();
  }

  loadInitialHeaderText() {

    this.text = "Featured Projects:";

  }

  grabText(){
    return this.text;
  }



  loadInitialProjects() {
    this.homeService.getHomeResults()
        .subscribe(
            res => {

                this.projectList.next(res);
            },
            err => console.log("Error retrieving Project List")
        );

}

loadSearchProjects(query: string) {
  if(query != ''){
    this.text = "Projects Matching: " + query;
  this.homeService.getSearchResults(query)
      .subscribe(
          res => {
              this.projectList.next(res);
          },
          err => console.log("Error retrieving Project List")
      );
        }

}

get getProjects() {
  return this.projectList.asObservable();
}

}
