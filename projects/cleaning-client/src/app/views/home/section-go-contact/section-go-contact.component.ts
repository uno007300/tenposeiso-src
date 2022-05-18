import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/cleaning-client/src/environments/environment';

@Component({
  selector: 'app-section-go-contact',
  templateUrl: './section-go-contact.component.html',
  styleUrls: ['./section-go-contact.component.scss']
})
export class SectionGoContactComponent implements OnInit {
  phone = environment.phone;
  constructor() { }

  ngOnInit(): void {
  }

}
