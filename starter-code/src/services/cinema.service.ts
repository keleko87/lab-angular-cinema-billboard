import { Injectable } from '@angular/core';
// import * as _ from 'lodash';
import * as _ from 'underscore';

const moviesList = require('../sample-movies');
class Movie {
  constructor(public id: number, public title: string, public poster: string,
              public synopsis: string, public genres: Array<string>,public year: number,
              public director: string, public actors: Array<string>,
              public hours: string, public room: number
            ){
            }
}


@Injectable()
export class CinemaService {

  rooms = [1, 2, 3, 4, 5];
  hours = ['18:20', '21:20', '22:30', '23:30'];
  days = ['Mon', 'Tue', 'Wed', 'Sat', 'Sun'];

  movies: Movie[] = [];
  constructor() {
    this.addMoviesList();
  }

  addMoviesList() {
    moviesList.forEach((e, i) => {
      let roomN = _.sample(this.rooms);
      let hour = _.sample(this.hours,2);
      let day = _.sample(this.days);

      this.movies.push(new Movie(e.id, e.title, e.poster,  e.synopsis,
                                e.genres, e.year,  e.director,
                                e.actors, `${day} at ${hour[0]} and ${hour[1]}`, roomN[0]));

    })
  }

  getMovies() {
    return this.movies;
  }
  getMovie(id: number) {
    this.movies.forEach(e => {
      if (e.id == id) return e;
    })
    return false;
  }
}
