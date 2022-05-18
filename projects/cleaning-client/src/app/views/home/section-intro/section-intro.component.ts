import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/cleaning-client/src/environments/environment';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss']
})
export class SectionIntroComponent implements OnInit {
  siteName = environment.siteName;
  constructor() { }

  ngOnInit(): void {
  }

}
