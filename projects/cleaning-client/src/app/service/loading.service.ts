import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FitOverlayComponent } from '../shared/fit-overlay/fit-overlay.component';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoadedSearchClientSubject = new BehaviorSubject<boolean>(false);
  public isLoadedCartClientSubject = new BehaviorSubject<boolean>(false);
  public isLoadedCategoryClientSubject = new BehaviorSubject<boolean>(false);
  public isLoadedBrandClientSubject = new BehaviorSubject<boolean>(false);
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter();
  @Output() siteError: EventEmitter<string> = new EventEmitter();
  @Output() isProgress: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private overlay: FitOverlayComponent
  ) { }

  showProgress(){
    this.isProgress.emit(true);
    this.overlay.begin();
  }

  hideProgress(){
    this.isProgress.emit(false);
    this.overlay.end();
  }

  showLoading(){
    this.isLoading.emit(true);
    this.overlay.begin();
  }

  hideLoading(){
    this.isLoading.emit(false);
    this.overlay.end();
  }

  hideLoadingWithError(message: string){
    this.isLoading.emit(false);
    this.siteError.emit(message);
    this.isProgress.emit(false);
    this.overlay.end();
  }
}
