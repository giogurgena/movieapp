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
  title: string;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  Search() {
    this.movies = this.movies.filter((res) => {
      return res.title
        .toLocaleLowerCase()
        .match(this.title.toLocaleLowerCase());
    });
  }

  private loadMovies() {
    this.movieService.getMovies().subscribe((response: MoviesResponse) => {
      this.movies = response.results;
    });
  }
}
