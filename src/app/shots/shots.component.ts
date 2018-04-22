import {Component, OnInit} from '@angular/core';
import {ShotsService} from '../shared/shots.service';
import {Shot} from '../shared/shot';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})

export class ShotsComponent implements OnInit {

  shots: Shot[];
  saveSrc: string;
  limitShots= 12;

  constructor(private httpService: ShotsService) {}

  ngOnInit() {
    // get data from service
   this.httpService.getData()
     .then((data: Shot) => this.shots = data['shotsList'])
     .catch(error => console.log(error));
  }
  //for change avatar
  mouseHover(hoverObject: Shot) {
    this.saveSrc = hoverObject.thumbnail;
    hoverObject.thumbnail = hoverObject.avatar;
  }
  //for change avatar
  mouseUnhover(unhoverObject: Shot) {
    unhoverObject.thumbnail = this.saveSrc;
  }
  //for scroll, adding elements
  updateScrollPosition(e: {endReached: boolean}){
    if(e.endReached){
      this.limitShots +=  this.limitShots;
    }
  }
}
