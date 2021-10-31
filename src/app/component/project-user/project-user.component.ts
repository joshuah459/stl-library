import { Component, Input, OnInit, Output } from '@angular/core';
import { USER } from '../../faux-users'
@Component({
  selector: 'app-project-user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.css']
})
export class ProjectUserComponent implements OnInit {
  @Input()
  usID!: string;
  username!: string;
  constructor() { 
  }

  ngOnInit(): void {
    this.username = USER.find(entry => entry.id == parseInt(this.usID))?.name || "Loading Component...";
  }

}
