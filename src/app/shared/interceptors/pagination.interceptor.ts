import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class PaginationInterceptor implements HttpInterceptor {

  pendingRequest = {};

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloneReq = req.clone();
    // if not specified per_page
    if (!req.params.has('per_page')) {
      cloneReq = req.clone({ params: req.params.set('per_page', '20') });
    }
    return next.handle(cloneReq);

  }

}
