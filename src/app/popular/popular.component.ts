import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesResponse } from '../models/moviesResponse';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadPopularMovies();
  }

  private loadPopularMovies() {
    this.movieService.getPopular().subscribe((response: MoviesResponse) => {
      this.movies = response.results;
      this.movies.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
    });
  }
}
