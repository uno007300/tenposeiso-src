import { Component, OnInit } from '@angular/core';
import { faqs } from '../../../menu';

@Component({
  selector: 'app-section-faq',
  templateUrl: './section-faq.component.html',
  styleUrls: ['./section-faq.component.scss']
})
export class SectionFaqComponent implements OnInit {
  faqs = faqs;
  constructor() { }

  ngOnInit(): void {
  }

}
