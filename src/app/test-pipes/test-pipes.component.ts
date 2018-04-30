import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrls: ['./test-pipes.component.css']
})

export class TestPipesComponent implements OnInit {
  // test pipes, with the work of the app is not connected
  users = [
    { 'user': 'barney', 'age': 36, 'active': true, 'test': 40 },
    { 'user': 'barney1', 'age': 36666, 'active': false , 'test': 50},
    { 'user': 'fred',   'age': 40, 'active': false, 'test': 100 }
  ];
  users1 = [{name: 'Fred', likes: 20},
            {name: 'John', likes: 20},
            {name: 'John2', likes: 20},
            {name: 'Alex', likes: 1},
            {name: 'Nick', likes: 1},
            {name: 'Ted', likes: 40},
            {name: 'Ted2', likes: 15},
            {name: 'Ted3', likes: 15}];

  constructor() {

  }

  ngOnInit() {

  }

}
