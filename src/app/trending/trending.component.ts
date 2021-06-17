import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesResponse } from '../models/moviesResponse';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadTrendingMovies();
  }

  private loadTrendingMovies() {
    this.movieService.getTrending().subscribe((response: MoviesResponse) => {
      this.movies = response.results;
      this.movies.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });
    });
  }
}
