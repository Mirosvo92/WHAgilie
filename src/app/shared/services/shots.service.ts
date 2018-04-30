import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable()
export class ShotsService {

  constructor(private httpClient: HttpClient) { }
  // get all shots
  getData(): Promise<any>  {
    const apiLink = 'http://api.mobile.design/api/shots?page=1&per_page=24';
    const promise =  new Promise((resolve, reject) => {
      setTimeout(() => {
        this.httpClient.get(apiLink)
          .subscribe(data => {
            // console.log(data);
            resolve(data);
          }, (error => {
            reject(error);
          }));
      }, 100);
    });

    return promise;
  }
  // download image
  getImg(link: string): Promise<any> {
    const apiLink = link;
    const promise =  new Promise((resolve, reject) => {
      setTimeout(() => {
        this.httpClient.get(apiLink, {responseType: 'blob'}).subscribe(data => {
            console.log(data);
            resolve(data);
          }, (error => {
            reject(error);
          }));
      }, 100);
    });
    return promise;
  }
}
