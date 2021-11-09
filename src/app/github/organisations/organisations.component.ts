import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubProfileServiceService } from '../github-profile-service.service';
import { Organisation } from '../organisation';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss'],
})
export class OrganisationsComponent implements OnInit {
  orgs$: Observable<Organisation[]> | undefined;

  constructor(private githubService: GithubProfileServiceService) {}

  ngOnInit(): void {
    this.orgs$ = this.githubService.getOrganisations();
  }
}
