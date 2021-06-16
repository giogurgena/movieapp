import { MoviesResponse } from './../models/moviesResponse';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.apiKey = environment.apiKey;
  }

  getMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`
    );
  }

  getMovie(id): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }
}
