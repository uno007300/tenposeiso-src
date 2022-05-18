import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'projects/cleaning-client/src/environments/environment';
@Component({
  selector: 'app-fit-snackbar',
  templateUrl: './fit-snackbar.component.html',
  styleUrls: ['./fit-snackbar.component.css']
})
export class FitSnackbarComponent implements OnInit {
  siteName = environment.siteName;
  constructor(public snackBar: MatSnackBar,) { }

  ngOnInit() {
  }
  open(message: string) {
    this.snackBar.open(message, this.siteName, {
      duration: 5000,
    });
  }
}
