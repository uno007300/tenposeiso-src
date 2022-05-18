import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

//import { MstMemberService } from '../services/mst-member.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoadingService } from '../service/loading.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        //private mstMemberService: MstMemberService,
        private loadingService: LoadingService,
        private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status)) {
                // auto logout if 401 response returned from api
                //this.mstMemberService.logout();
                
                //this.router.navigate(['/account/login']);
            }
            this.loadingService.hideLoadingWithError(err.error);
            console.log(`err:${JSON.stringify(err)}`);
            //alert(`err:${JSON.stringify(err)}`)
            console.log(`err.error:${err.error}`);
            const error = err.error || err.statusText;
            return throwError(err);
        }))
    }
}
