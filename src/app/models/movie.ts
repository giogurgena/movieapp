import { Genres } from './genres';

export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  genres: Genres[];
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
}
