import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// services
import {ShotsService} from './shared/shots.service';
import {UploadService} from './shared/upload.service';
// components
import { AppComponent } from './app.component';
import { ShotsListComponent } from './shots-list/shots-list.component';
import { UploadComponent } from './upload/upload.component';
import {DownloadShotComponent} from './shots-list/download-shot/download-shot.component';


@NgModule({
  declarations: [
    AppComponent,
    ShotsListComponent,
    UploadComponent,
    DownloadShotComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShotsService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
