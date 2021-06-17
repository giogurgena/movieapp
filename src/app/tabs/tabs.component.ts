import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesResponse } from '../models/moviesResponse';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  trendingMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  swipeable = true;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadTrendingMovies();
    this.loadPopularMovies();
  }

  private loadTrendingMovies() {
    this.movieService.getTrending().subscribe((response: MoviesResponse) => {
      this.trendingMovies = response.results;
      this.trendingMovies.sort(function (a, b) {
        return b.vote_average - a.vote_average;
      });
    });
  }

  private loadPopularMovies() {
    this.movieService.getPopular().subscribe((response: MoviesResponse) => {
      this.popularMovies = response.results;
      this.popularMovies.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
      console.log(this.popularMovies);
    });
  }
}
