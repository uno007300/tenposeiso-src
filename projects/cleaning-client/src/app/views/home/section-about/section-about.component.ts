import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/cleaning-client/src/environments/environment';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent implements OnInit {
  siteName = environment.siteName;
  constructor() { }

  ngOnInit(): void {
  }

}
