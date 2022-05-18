import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSnackbarComponent } from './fit-snackbar.component';

describe('FitSnackbarComponent', () => {
  let component: FitSnackbarComponent;
  let fixture: ComponentFixture<FitSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
