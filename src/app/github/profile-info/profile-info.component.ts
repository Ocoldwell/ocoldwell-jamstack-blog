import { Component, OnInit } from '@angular/core';
import {
  faGlobe,
  faPersonBooth,
  faUser,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { GithubProfileServiceService } from '../github-profile-service.service';
import { User } from '../user';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {
  faGlobe = faGlobe;
  faPeople = faUserFriends;
  user$: Observable<User> | undefined;

  constructor(private githubService: GithubProfileServiceService) {}

  ngOnInit(): void {
    this.user$ = this.githubService.getUser();
  }
}
