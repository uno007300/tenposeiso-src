import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'projects/cleaning-client/src/environments/environment';

@Component({
  selector: 'app-phone-dialog',
  templateUrl: './phone-dialog.component.html',
  styleUrls: ['./phone-dialog.component.scss']
})
export class PhoneDialogComponent implements OnInit {
  phone = environment.phone;
  time = environment.time;
  constructor(
    public dialogRef: MatDialogRef<PhoneDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
}
