import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moveToGitHubFrontend(){
    window.location.href = 'https://github.com/joshuah459/stl-library';
  }
  moveToGitHubBackend(){
    window.location.href = 'https://github.com/joshuah459/stl-library-backend.git';
  }

}
