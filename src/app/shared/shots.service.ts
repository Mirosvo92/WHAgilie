import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Shot} from './shot';

@Injectable()
export class ShotsService {


  activeShot: Shot;

  constructor(private httpClient: HttpClient) { }

  getData(){
    let apiLink = '../../assets/shots.json';
    let promise =  new Promise((resolve, reject) => {
      setTimeout(() => {
        this.httpClient.get(apiLink)
          .subscribe(data => {
            resolve(data);
          }, (error => {
            reject(error);
          }));
      }, 100);
    });

    return promise;
  }

  changeNumberActiveElement(item: Shot){
    this.activeShot = item;
  }

}
