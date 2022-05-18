import { Component, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatProgressSpinner } from '@angular/material/progress-spinner';



@Component({
  selector: 'app-fit-overlay',
  templateUrl: './fit-overlay.component.html',
  styleUrls: ['./fit-overlay.component.css']
})
export class FitOverlayComponent implements OnInit {

  constructor(
    public overlay: Overlay,
    //public overlay2: Overlay
    ) { }

  ngOnInit() {
  }

  spinner = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position().global().centerHorizontally().centerVertically()
  });

  //spinner2

  

  begin(){
    this.spinner.attach(new ComponentPortal(MatProgressSpinner));
  }

  end(){
    this.spinner.detach();
  }

  // begin2(component: any){
  //   this.spinner2 = this.overlay2.create({
  //     hasBackdrop: true
  //   }).attach(component);
  // }

  // end2(){
  //   if(this.spinner2){
  //     this.spinner2.detach();
  //   }
    
  // }
}
