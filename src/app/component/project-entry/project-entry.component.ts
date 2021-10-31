import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/Project';
import { USER } from 'src/app/faux-users';
import { User } from 'src/app/Users';
import { PROJECT } from 'src/app/faux-projects';
@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css']
})
export class ProjectEntryComponent implements OnInit {
  //projects and users
  @Input()
  projectID!: string;
  
  project!: Project;
  currentUser!: User;
 
  constructor() { 
  }

  ngOnInit(): void {
    this.project = PROJECT.find(x => x.id == parseInt(this.projectID));
    this.currentUser = USER.find(entry => entry.id == this.project.userID);
    
  }

}
