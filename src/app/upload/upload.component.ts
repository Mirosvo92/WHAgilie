import { Component, OnInit } from '@angular/core';
import {UploadService} from '../shared/services/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  // options for httpClient
  options = {
    observe: 'events',
    reportProgress: true
  };
  // progress will change width. var isActiveLabel is a flag
  progress = 0;
  isActiveLabel = true;
  // the link that we get
  resultLink = '';

  constructor(private uploadService: UploadService) {}

  ngOnInit() {
  }

  onFileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      // data file
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      // post
      this.uploadService.uploadUserFile('https://file.io', formData, this.options).subscribe(events => {
        // when file loading
        if (events.type === 1) {
          this.progress = 100 * events.loaded / events.total;
          this.isActiveLabel = false;
          // when file loaded
        } else if (events.type === 4) {
          this.resultLink = 'You link: ' + events.body.link;
          this.isActiveLabel = true;
        }
      });
    }
  }

}
