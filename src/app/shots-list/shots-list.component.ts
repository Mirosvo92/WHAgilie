import { Component, OnInit } from '@angular/core';
import {ShotsService} from '../shared/services/shots.service';

@Component({
  selector: 'app-shots-list',
  templateUrl: './shots-list.component.html',
  styleUrls: ['./shots-list.component.css']
})
export class ShotsListComponent implements OnInit {

  shots: Array<any>;
  isLoader = false;

  constructor(private shotsService: ShotsService) { }

  ngOnInit() {
    // get data from service
    this.shotsService.getData()
      .then((data) => {
        this.shots = data['shots'];
        this.isLoader = true;
    }).catch(error => console.log(error));
  }

}
