import { MoviesResponse } from './../models/moviesResponse';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
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

  getAll(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}`
    );
  }

  get(id: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getTrending(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`
    );
  }

  getPopular(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    );
  }

  search(query: string): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
    );
  }
}
