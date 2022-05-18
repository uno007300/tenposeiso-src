import { Component, OnInit } from '@angular/core';
import { events } from '../../../menu';

@Component({
  selector: 'app-section-event',
  templateUrl: './section-event.component.html',
  styleUrls: ['./section-event.component.scss']
})
export class SectionEventComponent implements OnInit {

  events = events;
  constructor() { }

  ngOnInit(): void {
  }

}
