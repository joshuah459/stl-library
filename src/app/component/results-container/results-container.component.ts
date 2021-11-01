import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Project';


import { HomeFinderService } from 'src/app/services/home-finder.service';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.css']
})

export class ResultsContainerComponent implements OnInit {
  Projects: Project[];

  constructor(private homeService: HomeFinderService) {
    this.homeService.getHomeResults()
      .subscribe((resp) => {
        this.Projects = resp;
        console.log(this.Projects);
      });
  }

  ngOnInit(): void {
  }

}
