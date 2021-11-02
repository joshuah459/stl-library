import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  constructor() { }


  //redirect user to the github repository containing the source code for the front end
  moveToGitHubFrontend(){
    window.location.href = 'https://github.com/joshuah459/stl-library';
  }

  //redirect user to the github repository containing the source code for the back end
  moveToGitHubBackend(){
    window.location.href = 'https://github.com/joshuah459/stl-library-backend.git';
  }

}
