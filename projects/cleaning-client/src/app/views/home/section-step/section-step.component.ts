import { Component, OnInit } from '@angular/core';
import { steps } from '../../../menu';

@Component({
  selector: 'app-section-step',
  templateUrl: './section-step.component.html',
  styleUrls: ['./section-step.component.scss']
})
export class SectionStepComponent implements OnInit {
  steps= steps;
  constructor() { }

  ngOnInit(): void {
  }

}
