import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// components
import { AppComponent } from './app.component';
import { ShotsListComponent } from './shots-list/shots-list.component';
// services
import {ShotsService} from './shared/shots.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ShotsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
