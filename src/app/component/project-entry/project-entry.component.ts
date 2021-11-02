import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog, _closeDialogVia } from '@angular/material/dialog';

//import the stl viewer
import { StlViewerComponent } from '../stl-viewer/stl-viewer.component';

//input data sources and interfaces
import { Project } from 'src/app/Project';
import { USER } from 'src/app/faux-users';
import { User } from 'src/app/Users';


@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrls: ['./project-entry.component.css'],
  template: 'passed in {{ data.projectID }}',
})
export class ProjectEntryComponent implements OnInit {

  currentUser!: User;

  fromPage!: string;
  fromDialog!: string;
 
  constructor(public dialogRef: MatDialogRef<ProjectEntryComponent>,
    @Optional() @Inject (MAT_DIALOG_DATA) public data: {project: Project}, public dialog: MatDialog ) {
      
  }

  //on initialization we need to use the project.userID to fine the users information to pass to the page
  ngOnInit(): void {
    this.currentUser = USER.find(entry => entry.id == this.data.project.userID);
  }

  //on click, open a dialog that uses the stlviewer component to show the user the projects associated 3d model in an interactable way
  openSTLDialog(){
    const dialogRef = this.dialog.open(StlViewerComponent, {
      hasBackdrop: true,
      width: "50%",
      height: "90%",
      data: { stl_src: this.data.project.stl_src},
      autoFocus: false,
    });
  }
  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }


}
