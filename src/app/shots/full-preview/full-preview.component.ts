import { Component, OnInit } from '@angular/core';
import {ShotsService} from '../../shared/shots.service';
import {Shot} from '../../shared/shot';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-preview',
  templateUrl: './full-preview.component.html',
  styleUrls: ['./full-preview.component.css']
})
export class FullPreviewComponent implements OnInit {

  activeFullShot: Shot;
  saveDataActiveFullShot: Shot;
  idShot: number;

  constructor(private httpService: ShotsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idShot = +this.route.snapshot.params['id'];
    // if user reload page
    if(this.httpService.activeShot){
      this.saveDataActiveFullShot = this.httpService.activeShot;
      localStorage.setItem('fulShot', JSON.stringify(this.saveDataActiveFullShot));
    }
    this.activeFullShot = JSON.parse(localStorage.getItem('fulShot'));
    console.log(this.activeFullShot);
  }
  // button for return page gallery
  backGallery(){
    this.router.navigate(['shotsList/' + this.idShot]);
  }

}
