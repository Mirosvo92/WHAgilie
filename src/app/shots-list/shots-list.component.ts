import { Component, OnInit } from '@angular/core';
import {ShotsService} from '../shared/shots.service';
import {DomSanitizer} from '@angular/platform-browser';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-shots-list',
  templateUrl: './shots-list.component.html',
  styleUrls: ['./shots-list.component.css']
})
export class ShotsListComponent implements OnInit {

  shots: Array<any>;

  constructor(private shotsService: ShotsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // get data from service
    this.shotsService.getData()
      .then((data) => this.shots = data['shots'])
      .catch(error => console.log(error));
  }
  // method for sending image data
  downloadClick(linkImg: string, name: string) {
    this.shotsService.getImg(linkImg)
      .then((data) => this.downloadImg(data, name))
      .catch(error => console.log(error));
  }
  // we get blob object from shotsService
  downloadImg(data: any, name: string) {
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    FileSaver.saveAs(blob, name + '.jpg');
  }

}
