import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { PanelComponent } from './panel/panel.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    GithubComponent,
    RepositoriesComponent,
    ProfileInfoComponent,
    PanelComponent,
    OrganisationsComponent,
    GithubProfileComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [GithubComponent],
})
export class GithubModule {}
