import { Component, OnInit } from '@angular/core';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentDate = new Date();
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
