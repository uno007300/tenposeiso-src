import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { MenuDialogComponent } from './views/dialog/menu-dialog/menu-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { SideNavComponent } from './views/layout/side-nav/side-nav.component';
import { TopNavComponent } from './views/layout/top-nav/top-nav.component';
import { SectionServiceComponent } from './views/home/section-service/section-service.component';
import { SectionContactComponent } from './views/home/section-contact/section-contact.component';
import { SectionWorksComponent } from './views/home/section-works/section-works.component';
import { SectionCompnayComponent } from './views/home/section-compnay/section-compnay.component';
import { TermOfUseComponent } from './views/term-of-use/term-of-use.component';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ExtraOptions, RouterModule } from '@angular/router';
import { SectionStaffComponent } from './views/home/section-staff/section-staff.component';
import { SectionPriceComponent } from './views/home/section-price/section-price.component';
import { SectionAboutComponent } from './views/home/section-about/section-about.component';
import { SectionIntroComponent } from './views/home/section-intro/section-intro.component';
import { SectionWhyUsComponent } from './views/home/section-why-us/section-why-us.component';
import { ImageDialogComponent } from './views/dialog/image-dialog/image-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { SectionEventComponent } from './views/home/section-event/section-event.component';
import { SectionStepComponent } from './views/home/section-step/section-step.component';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { CompanyComponent } from './views/company/company.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FitOverlayComponent } from './shared/fit-overlay/fit-overlay.component';
import { LoadingService } from './service/loading.service';
import {OverlayModule} from '@angular/cdk/overlay';
import { FitSnackbarComponent } from './shared/fit-snackbar/fit-snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { CommonModule } from '@angular/common';
import { SectionGoContactComponent } from './views/home/section-go-contact/section-go-contact.component';
import { SectionAreaComponent } from './views/home/section-area/section-area.component';
import { SectionFaqComponent } from './views/home/section-faq/section-faq.component';
import { CampaignComponent } from './views/dialog/campaign/campaign.component';

export const APP_ROUTES = [
  { path: '', component: HomeComponent, data : { animation : { value :'home'} } },
  { path: 'term-of-use', component: TermOfUseComponent, data : { animation : { value :'term-of-use'} } },
  { path: 'company', component: CompanyComponent, data : { animation : { value :'company'} } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, data : { animation : { value :'privacy-policy'} } },
  { path: '**', redirectTo: 'not-found' },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: 'enabled'
  // ...any other options you'd like to use
};

@NgModule({
  declarations: [
    AppComponent,
    MenuDialogComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    TopNavComponent,
    SectionServiceComponent,
    SectionContactComponent,
    SectionWorksComponent,
    SectionCompnayComponent,
    TermOfUseComponent,
    PrivacyPolicyComponent,
    NotFoundComponent,
    SectionStaffComponent,
    SectionPriceComponent,
    SectionAboutComponent,
    SectionIntroComponent,
    SectionWhyUsComponent,
    ImageDialogComponent,
    SectionEventComponent,
    SectionStepComponent,
    LazyLoadDirective,
    CompanyComponent,
    SectionGoContactComponent,
    SectionAreaComponent,
    SectionFaqComponent,
    CampaignComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, routerOptions),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    FitOverlayComponent,
    FitSnackbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
