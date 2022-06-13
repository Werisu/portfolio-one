import { UserGithub } from './../../interfaces/user-github';
import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userGithub!: UserGithub;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getUserGitHub();
  }

  getUserGitHub(){
    this.githubService.getUserGitHub().subscribe({
      next: (value: UserGithub) => this.userGithub = value,
      error: error => console.error(error)
    })
  }

}
