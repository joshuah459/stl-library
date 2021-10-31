import { Component, OnInit,  } from '@angular/core';
import { MatDialog, _closeDialogVia } from '@angular/material/dialog';
import { ProjectEntryComponent } from '../project-entry/project-entry.component';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {

  }

  openProjectDialog(){
    const dialogRef = this.dialog.open(ProjectEntryComponent, {
      hasBackdrop: true,
      width: "60%",
      height: "70%",
      data: { projectID: "2"},
      autoFocus: false,
    });

    
  }

}

