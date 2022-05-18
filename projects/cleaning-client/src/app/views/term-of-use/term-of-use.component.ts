import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/cleaning-client/src/environments/environment';

@Component({
  selector: 'app-term-of-use',
  templateUrl: './term-of-use.component.html',
  styleUrls: ['./term-of-use.component.scss']
})
export class TermOfUseComponent implements OnInit {
  companyName = environment.companyName;
  constructor() { }

  ngOnInit(): void {
  }

}
