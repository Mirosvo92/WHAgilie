import {Component, Input, OnInit} from '@angular/core';
import * as FileSaver from 'file-saver';
import {ShotsService} from '../../shared/shots.service';

@Component({
  selector: 'app-download-shot',
  templateUrl: './download-shot.component.html',
  styleUrls: ['./download-shot.component.css']
})
export class DownloadShotComponent implements OnInit {
  @Input() shotName: string;
  @Input() shotLink: number;

  constructor(private shotsService: ShotsService) { }

  ngOnInit() {
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
