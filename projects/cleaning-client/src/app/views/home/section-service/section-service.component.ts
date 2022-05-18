import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { services } from '../../../menu';
import { ServiceService } from '../../../service/service.service';
import { ImageDialogComponent } from '../../dialog/image-dialog/image-dialog.component';

@Component({
  selector: 'app-section-service',
  templateUrl: './section-service.component.html',
  styleUrls: ['./section-service.component.scss']
})
export class SectionServiceComponent implements OnInit {
  selectedServiceId: string = 'tab-1';
  services = services;
  constructor(
    public dialog: MatDialog,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    this.serviceService.selectedServiceBehavior.subscribe(result => {
      this.selectedServiceId = result;
    });
  }

  openImage(imgUrl: string){
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      maxWidth: '95vw',
      width:'800px',
      maxHeight: '90vh',
      data: imgUrl
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
