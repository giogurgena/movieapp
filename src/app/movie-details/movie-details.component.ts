import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesResponse } from '../models/moviesResponse';
import { MovieService } from '../services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  id: string;
  movie;

  apiPosterUrl: string = environment.apiPosterUrl;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getId();
    this.loadMovie(this.id);
  }

  getId() {
    this.route.params.subscribe((result) => {
      this.id = result.id;
    });
  }

  private loadMovie(id) {
    this.movieService.get(id).subscribe((response: MoviesResponse) => {
      this.movie = response;
    });
  }
}
