import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { topNavis } from '../../../menu';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {
  topNavis = topNavis;
  constructor(
    public dialogRef: MatDialogRef<MenuDialogComponent>,
    //@Inject(MAT_DIALOG_DATA) public inProductImage: ProductImage
  ) { }

  ngOnInit(): void {
    this.dialogRef.updatePosition({ top: `30px` });
  }

}
