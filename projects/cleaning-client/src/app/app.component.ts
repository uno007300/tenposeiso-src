import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { menus, Serivce, services, topNavis } from './menu';
import { MenuDialogComponent } from './views/dialog/menu-dialog/menu-dialog.component';
import { NavigationEnd, Router } from '@angular/router';
import { GaService } from './service/ga.service';
import { filter } from 'rxjs';
import { LoadingService } from './service/loading.service';
import { CampaignComponent } from './views/dialog/campaign/campaign.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private router: Router,
    private gaService: GaService,
    private media: MediaMatcher,
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    //this.selectedService = services[0];

    // googleAnalytics tracking
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((params: any) => {
      this.gaService.sendPageView(params.url);
    });

    this.openDialog();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
  
  openDialog(){
    const dialogRef = this.dialog.open(CampaignComponent, {
      width: '95%',
      maxWidth: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
}
