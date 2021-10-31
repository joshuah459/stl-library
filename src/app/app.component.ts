import { Component } from '@angular/core';
import { Project } from 'src/app/Project';
import { PROJECT } from 'src/app/faux-projects';


import { HomeFinderService } from './services/home-finder.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Projects: Project[];
  title = 'zogoProject';

  constructor(private homeService: HomeFinderService) {
    this.homeService.getHomeResults()
      .subscribe((resp) => {
        this.Projects = resp;
        console.log(this.Projects);
      });
  }


ngOnInit(): void {
 var numProjects = PROJECT.length;

 if(numProjects < 10){
   //pick 10 random projects in random order to feature
 }else{
   //randomize the fewer than 10 projects
 }
 console.log(numProjects);
}

}