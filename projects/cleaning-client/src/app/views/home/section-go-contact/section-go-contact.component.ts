import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'projects/cleaning-client/src/environments/environment';
import { PhoneDialogComponent } from '../../dialog/phone-dialog/phone-dialog.component';

@Component({
  selector: 'app-section-go-contact',
  templateUrl: './section-go-contact.component.html',
  styleUrls: ['./section-go-contact.component.scss']
})
export class SectionGoContactComponent implements OnInit {
  phone = environment.phone;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
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
