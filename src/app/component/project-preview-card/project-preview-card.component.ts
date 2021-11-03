import { Component, Input } from '@angular/core';
import { MatDialog, _closeDialogVia } from '@angular/material/dialog';

//import the project interface and the project entry component
import { Project } from 'src/app/Project';
import { ProjectEntryComponent } from '../project-entry/project-entry.component';

@Component({
  selector: 'app-project-preview-card',
  templateUrl: './project-preview-card.component.html',
  styleUrls: ['./project-preview-card.component.css']
})
export class ProjectPreviewCardComponent{

  //the project data is provided by the ngFor loop and is populated by the results component and the data service
  @Input()
  project!: Project;
  constructor(public dialog: MatDialog) { }

  //open a dialog on click that provides the project as data
  projectClicked(){
    const dialogRef = this.dialog.open(ProjectEntryComponent, {
      hasBackdrop: true,
      width: "fit",
      height: "fit",
      data: { project: this.project},
      autoFocus: false,
    });
}
}