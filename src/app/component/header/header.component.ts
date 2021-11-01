import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'STL-Library';

  constructor() { }

  ngOnInit(): void {
  }

  moveToGitHub(){
    window.location.href = 'https://github.com/joshuah459/stl-library';
  }
}
