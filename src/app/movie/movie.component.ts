import { Movie } from './../models/movie';
import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie: Movie;

  hover: boolean;

  apiPosterUrl: string = environment.apiPosterUrl;

  constructor() {
    this.hover = true;
  }
}
