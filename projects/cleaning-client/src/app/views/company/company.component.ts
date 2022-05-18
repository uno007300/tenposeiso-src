import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/cleaning-client/src/environments/environment';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  address = environment.address;
  boss = environment.boss;
  companyName = environment.companyName;
  constructor() { }

  ngOnInit(): void {
  }

}
