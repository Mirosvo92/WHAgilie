import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent} from './app.component';
import {ShotsComponent} from './shots/shots.component';
import {HttpClientModule} from '@angular/common/http';
import {ShotsService} from './shared/shots.service';
import {AppRoutingModule} from './app-routing.module';
import { ViewShotsComponent } from './view-shots/view-shots.component';
import {ScrollFromTop} from './directives/scrollFromTop.directive';
import {AnimateShotDirective} from './directives/animateShot.directive';
import { GalleryShotComponent } from './shots/gallery-shot/gallery-shot.component';
import {AnimateGalleryDirective} from './directives/animateGallery.directive';
import {FullPreviewComponent} from './shots/full-preview/full-preview.component';



@NgModule({
  declarations: [
    AppComponent,
    ShotsComponent,
    ViewShotsComponent,
    ScrollFromTop,
    AnimateShotDirective,
    GalleryShotComponent,
    AnimateGalleryDirective,
    FullPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
