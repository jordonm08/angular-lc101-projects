import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Into the Wild', 'Birdman', 'Synecdoche New York', 'God Bless America'];

   constructor() { }

   ngOnInit() {
   }

}
