import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/cleaning-client/src/environments/environment';
import { Serivce, services, topNavis } from '../../../menu';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  yearNo = new Date().getFullYear();
  siteName = environment.siteName;
  address = environment.address;
  phone = environment.phone;
  email = environment.email;
  time = environment.time;
  topNavis = topNavis;
  services = services;
  compnayName = environment.companyName;
  
  constructor(
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
  }

  changeService(service: Serivce){
    this.serviceService.selectedServiceBehavior.next(service.id);
  }

}
