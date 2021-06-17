import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesResponse } from '../models/moviesResponse';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  title: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies(this.title);
  }

  Search() {
    this.loadMovies(this.title);
  }

  private loadMovies(query: string) {
    this.movieService.search(query).subscribe((response: MoviesResponse) => {
      this.movies = response.results;
    });
  }
}
