import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class HomeFinderService {
  

  constructor(private http: HttpClient) {}
  
  //from the backend, retrieve the basic list to display when the homepage loads
  //it should be 8 items in no particular order
  getHomeResults() {
    return this.http.get<Project[]>('http://3.14.145.172:3002/api/homeRandomizer.json');
  }

  //from the backend, retrieve as many items that match the search criteria as possible
  //because the database is small this wont be too costly, however at scale, a page breakdown would be necessary to avoid huge amounts of data being sent all at once
  getSearchResults(searchTerm: string) {
    return this.http.post<Project[]>('http://3.14.145.172:3002/api/search/', searchTerm);
  }

}
