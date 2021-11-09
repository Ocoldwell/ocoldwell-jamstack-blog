import { Component, OnInit } from '@angular/core';
import {
  faCode,
  faProjectDiagram,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { map, Observable } from 'rxjs';
import { GithubProfileServiceService } from '../github-profile-service.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  faCode = faCode;
  faStar = faStar;
  faDiagram = faProjectDiagram;

  repos$: Observable<Repository[]> | undefined;

  constructor(private githubService: GithubProfileServiceService) {}

  ngOnInit(): void {
    this.repos$ = this.githubService
      .getRepos()
      .pipe(map((repos) => repos.filter((repo) => !repo.fork)));
  }
}
