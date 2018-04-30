import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appSortBy'
})


export class SortByPipe implements PipeTransform {

  listForBubble = [];
  objectsList = [];

  transform(value, arg) {
    const self = this;
    // we must create two array [data],[object] and to do sorting array with data
    value.forEach(function(item) {
      self.objectsList.push(item);
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          if (key === arg) {
            self.listForBubble.push(item[key]);
          }
        }
      }
    });
    return this.bubbleSortFunction(self.listForBubble, this.objectsList);
  }
  // we get all likes and we must sort from smaller to bigger
  bubbleSortFunction(arr, objects) {
    for (let i = 0; i < arr.length; i++) {
      for (let x = 0; x < arr.length - 1; x++) {
        if (arr[x] > arr[x + 1]) {
          // for cycles
          const more = arr[x];
          const less = arr[x + 1];
          arr[x + 1] = more;
          arr[x] = less;
          // sort objects
          const moreObjects = objects[x];
          const lessObject = objects[x + 1];
          this.objectsList[x + 1] = moreObjects;
          this.objectsList[x] = lessObject;
        }
      }
    }
    return this.objectsList;
  }



}
