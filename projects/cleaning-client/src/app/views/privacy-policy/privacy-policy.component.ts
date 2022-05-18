import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/cleaning-client/src/environments/environment';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  companyName = environment.companyName;
  address = environment.address;
  email = environment.email;
  constructor() { }

  ngOnInit(): void {
  }

}
