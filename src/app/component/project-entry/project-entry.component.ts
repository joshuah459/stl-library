import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


import { Project } from 'src/app/Project';
import { USER } from 'src/app/faux-users';
import { User } from 'src/app/Users';
import { PROJECT } from 'src/app/faux-projects';


@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css'],
  template: 'passed in {{ data.projectID }}',
})
export class ProjectEntryComponent implements OnInit {

  project!: Project;
  currentUser!: User;

  fromPage!: string;
  fromDialog!: string;
 
  constructor(public dialogRef: MatDialogRef<ProjectEntryComponent>,
    @Optional() @Inject (MAT_DIALOG_DATA) public data: {projectID: string} ) {

  }

  ngOnInit(): void {
    this.project = PROJECT.find(x => x.id == parseInt(this.data.projectID));
    this.currentUser = USER.find(entry => entry.id == this.project.userID);
    this.fromDialog = "I am from dialog land...";

    
  }

  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }


}
