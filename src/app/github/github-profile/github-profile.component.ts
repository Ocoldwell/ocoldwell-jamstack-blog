import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss'],
})
export class GithubProfileComponent implements OnInit {
  username = environment.username;
  github = faGithub;
  constructor() {}

  ngOnInit(): void {}
}
