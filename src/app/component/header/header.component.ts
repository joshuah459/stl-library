import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  //declare a title to pass to the header web component
  title = 'STL-Library';

  constructor() { }


    //redirect user to the github repository containing the source code for the back end
  moveToGitHub(){
    window.location.href = 'https://github.com/joshuah459/stl-library';
  }
}
