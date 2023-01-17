import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'projects/cleaning-client/src/environments/environment';
import { services, topNavis } from '../../../menu';
import { LoadingService } from '../../../service/loading.service';
import { MenuDialogComponent } from '../../dialog/menu-dialog/menu-dialog.component';
import { PhoneDialogComponent } from '../../dialog/phone-dialog/phone-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isProgress = false;

  siteName = environment.siteName;
  address = environment.address;
  phone = environment.phone;
  email = environment.email;
  time = environment.time;
  topNavis = topNavis;
  services = services;
  
  constructor(
    private loadingService: LoadingService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loadingService.isProgress.subscribe(result => {
      console.log(result);
      this.isProgress = result;
    });
  }

  toggleMenu(){
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      maxWidth: '95vw',
      width:'800px',
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  call(){
    const dialogRef = this.dialog.open(PhoneDialogComponent, {
      width: '95%',
      maxWidth: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
}
