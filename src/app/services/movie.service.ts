import { MoviesResponse } from './../models/moviesResponse';
import { Movie } from './../models/movie';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
