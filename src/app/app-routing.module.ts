import {Routes, RouterModule} from '@angular/router';
import {ShotsComponent} from './shots/shots.component';
import {NgModule} from '@angular/core';
import {ViewShotsComponent} from './view-shots/view-shots.component';
import {GalleryShotComponent} from './shots/gallery-shot/gallery-shot.component';
import {FullPreviewComponent} from './shots/full-preview/full-preview.component';

const appRoutes: Routes =[
  { path: '', component: ViewShotsComponent},
  { path: 'shotsList', component: ShotsComponent},
  { path: 'shotsList/:id', component: GalleryShotComponent},
  { path: 'shotsList/:id/full-preview', component: FullPreviewComponent},
  { path: '**', component: ViewShotsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
