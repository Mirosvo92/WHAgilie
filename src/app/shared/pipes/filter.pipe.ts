import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appFilter'
})

export class FilterPipe implements PipeTransform {
    result = [];
    transform(value, arg, limit) {
      if (typeof arg === 'object' && arg.length) {
        this.result = [];
        return this.filterArray(value, arg);
      } else {
        return value.filter(function(item) {
          return item[arg] > limit;
        });
      }
    }
    // if user sent array
    filterArray(value, arg) {
      const self = this;
      value.forEach(function(item) {
        for (const key in item) {
          if (item.hasOwnProperty(key) && key === arg[0]  && item[key] === arg[1]) {
            self.result.push(item);
          }
        }
      });
      return this.result;
    }
}
