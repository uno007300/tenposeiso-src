import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'projects/cleaning-client/src/environments/environment';
import { ContactModel } from '../../../models/contact';
import { ContactService } from '../../../service/contact.service';
import { GaService } from '../../../service/ga.service';
import { LoadingService } from '../../../service/loading.service';
import { FitSnackbarComponent } from '../../../shared/fit-snackbar/fit-snackbar.component';
import { GenericValidator } from '../../../validator/generic-validator';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  address = environment.address;
  siteName = environment.siteName;
  phone = environment.phone;
  email = environment.email;
  time = environment.time;
  companyName = environment.companyName;

  displayMessage: { [key: string]: string } = {};
  errorMessage: string;
  thisForm: UntypedFormGroup;
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  contact: ContactModel;
  
  constructor(
    private fb: UntypedFormBuilder,
    private contactService: ContactService,
    private gaService: GaService,
    private router: Router,
    private snackBar: FitSnackbarComponent,
    private loadingService: LoadingService
  ) {
    this.validationMessages = {
      content: {required: 'required'},
      email: {required: 'required'},
      tel: {required: 'required'},
      name: {required: 'required'},
      address: {required: 'required'},
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit(): void {
    this.thisForm = this.fb.group({
      content: ['', [ Validators.required]],
      email: ['', [ Validators.required]],
      tel: ['', [ Validators.required]],
      name: ['', [ Validators.required]],
      address: ['', [ Validators.required]],
    });
  }

  onSubmit(){
    this.loadingService.showProgress();
    if (this.thisForm.dirty && this.thisForm.valid) {
      // Copy the form values over the division object values
      //let p = Object.assign({}, this.subject, this.thisForm.value);
      this.contact = Object.assign({}, this.thisForm.value);
      this.contactService.PostContact(this.contact).pipe().subscribe(result => {
        this.onSaveComplete();
        this.snackBar.open("お問い合わせ、ありがとうございます。");
        this.loadingService.hideProgress();
        this.gaService.sendEvent(this.router.url, 'click', this.contact.email, 'send contact');
        this.thisForm.reset();
      });
    } else {
      this.loadingService.hideProgress();
        //this.onSaveComplete(false);

    }
  }

  onSaveComplete(){

  }
}
