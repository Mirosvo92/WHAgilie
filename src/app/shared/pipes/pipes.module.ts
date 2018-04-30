import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterPipe} from './filter.pipe';
import {SortByPipe} from './sortBy.pipes';

@NgModule({
  declarations: [
    FilterPipe,
    SortByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    SortByPipe
  ]
})

export class PipesModule {}
