import { UserGithub } from './../interfaces/user-github';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const API = environment.apiGitHub;

@Injectable({
  providedIn: 'root'
})
export class GithubService {

constructor(private http: HttpClient) { }

getUserGitHub(): Observable<UserGithub>{
  return this.http.get<UserGithub>(`${API}/users/Werisu`);
}

getEvents(): Observable<any>{
  return this.http.get<any>(`${API}/users/Werisu/events`);
}

}
