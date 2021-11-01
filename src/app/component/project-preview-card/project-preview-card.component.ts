import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, _closeDialogVia } from '@angular/material/dialog';
import { Project } from 'src/app/Project';
import { ProjectEntryComponent } from '../project-entry/project-entry.component';

@Component({
  selector: 'app-project-preview-card',
  templateUrl: './project-preview-card.component.html',
  styleUrls: ['./project-preview-card.component.css']
})
export class ProjectPreviewCardComponent implements OnInit {
  @Input()
  project!: Project;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  projectClicked(){
    const dialogRef = this.dialog.open(ProjectEntryComponent, {
      hasBackdrop: true,
      width: "60%",
      height: "70%",
      data: { project: this.project},
      autoFocus: false,
    });
}
}