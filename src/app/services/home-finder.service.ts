import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class HomeFinderService {
  

  constructor(private http: HttpClient) {}
  
  getHomeResults() {
    return this.http.get<Project[]>('http://localhost:3002/api/homeRandomizer.json');
  }

  getSearchResults(searchTerm: string) {
    return this.http.post<Project[]>('http://localhost:3002/api/search/', searchTerm);
  }

}
