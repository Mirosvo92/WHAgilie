import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UploadService {

  constructor(private httpClient: HttpClient) { }

  uploadUserFile (apiUrl: string, element: FormData, options?): Observable<any> {
    return this.httpClient.post(apiUrl, element, options);
  }

}
