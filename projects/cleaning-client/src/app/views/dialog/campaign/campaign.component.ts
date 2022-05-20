import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CampaignComponent>,
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
}
