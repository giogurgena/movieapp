import { CastResponse } from './../models/castResponse';
import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { environment } from 'src/environments/environment';
import { Cast } from '../models/cast';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  id: number = 0;
  movie: Movie = {} as Movie;
  cast: Cast[] = [];

  apiPosterUrl: string = environment.apiPosterUrl;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.loadMovie();
    this.loadCast();
  }

  private loadMovie() {
    this.movieService.get(this.id).subscribe((response: Movie) => {
      this.movie = response;
    });
  }

  private loadCast() {
    this.movieService.getCast(this.id).subscribe((response: CastResponse) => {
      this.cast = response.cast;
    });
  }
}
