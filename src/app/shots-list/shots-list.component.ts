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

  testMethod() {
    const link = 'http://api.mobile.design/uploads/shots/239d30d434bb80223407f9e375a64e6790bd9234.?1505722325';
    this.shotsService.getImg(link)
      .then((data) => this.downloadImg(data))
      .catch(error => console.log(error));
  }

  downloadImg(data: any) {
    const blob = new Blob([data], {
      type: 'application/octet-stream'
    });
    FileSaver.saveAs(blob, 'shot-image.jpg');
  }

}
