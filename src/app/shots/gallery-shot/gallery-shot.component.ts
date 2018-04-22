import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Shot} from '../../shared/shot';
import {ShotsService} from '../../shared/shots.service';

@Component({
  selector: 'app-gallery-shot',
  templateUrl: './gallery-shot.component.html',
  styleUrls: ['./gallery-shot.component.css']
})
export class GalleryShotComponent implements OnInit {

  idShot: number;
  shotsList: Shot[] = [];
  activeShot: Shot;

  constructor(private route: ActivatedRoute, private router: Router ,private httpService: ShotsService) {
  }

  ngOnInit() {
    //id active element
    this.idShot = +this.route.snapshot.params['id'];
    // get data from service
    this.httpService.getData()
      .then((data: Shot) => {this.onSubscribe(data['shotsList'])})
      .catch(error => console.log(error));
    // change data of id in services
  }

  onSubscribe(data: Shot[]){
    this.shotsList = data;
    this.activeShot = this.shotsList.find(item => item.id === this.idShot);
    // send data of the active element
    this.httpService.changeNumberActiveElement(this.activeShot);
  }
  // method for change the active image
  changeActiveImg(activeShot){
    this.idShot = activeShot.id;
    this.activeShot = activeShot;
    // send data of the active element
    this.httpService.changeNumberActiveElement(activeShot);
  }

  openImgPage (){
    this.router.navigate(['full-preview'], {relativeTo: this.route});
  }

}
