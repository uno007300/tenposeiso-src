import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/cleaning-client/src/environments/environment';
import { whyUsItems } from '../../../menu';

@Component({
  selector: 'app-section-why-us',
  templateUrl: './section-why-us.component.html',
  styleUrls: ['./section-why-us.component.scss']
})
export class SectionWhyUsComponent implements OnInit {
  siteName = environment.siteName;
  whyUsItems = whyUsItems;
  constructor() { }

  ngOnInit(): void {
  }

}
