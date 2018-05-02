import { Injectable } from "@angular/core";

import { Movies } from "../sample-movies";

interface Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}
@Injectable()
export class MoviesService {
  movies: Array<Movie> = Movies;
  constructor() {}

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies[id];
  }
}
