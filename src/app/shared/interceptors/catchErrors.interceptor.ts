import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class CatchErrorsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next
      .handle(req)
      .do((response: HttpEvent<any>) => {
        return response;
      })
      .catch(error => {
        if (error instanceof HttpErrorResponse) {
          console.log('Processing http error', error);
        }
        return Observable.throw(error);
      });

  }

}
