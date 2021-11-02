import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class HomeFinderService {
  

  constructor(private http: HttpClient) {}
  
  getHomeResults() {
    return this.http.get<Project[]>('http://3.14.145.172:3002/api/homeRandomizer.json');
  }

  getSearchResults(searchTerm: string) {
    return this.http.post<Project[]>('http://3.14.145.172:3002/api/search/', searchTerm);
  }

}
