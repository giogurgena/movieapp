import { MovieDetailsComponent } from './../movie-details/movie-details.component';
import { Movie } from './../models/movie';
import { MoviesResponse } from './../models/moviesResponse';
import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  // movies: Movie[] = [];
  @Input() movie;

  constructor() {}

  ngOnInit(): void {
    // this.loadMovies();
  }

  // private loadMovies() {
  //   this.movieService.getMovies().subscribe((response: MoviesResponse) => {
  //     this.movies = response.results;
  //     // console.log(this.movies);
  //   });
  // }
}
