import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PaginationInterceptor} from './shared/interceptors/pagination.interceptor';

// services
import {ShotsService} from './shared/services/shots.service';
import {UploadService} from './shared/services/upload.service';
// components
import { AppComponent } from './app.component';
import { ShotsListComponent } from './shots-list/shots-list.component';
import { UploadComponent } from './upload/upload.component';
import {DownloadShotComponent} from './shots-list/download-shot/download-shot.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
// module
import {PipesModule} from './shared/pipes/pipes.module';




@NgModule({
  declarations: [
    AppComponent,
    ShotsListComponent,
    UploadComponent,
    DownloadShotComponent,
    TestPipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    ShotsService,
    UploadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PaginationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
