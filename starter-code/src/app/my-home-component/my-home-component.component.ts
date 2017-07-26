import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponentComponent implements OnInit {

  constructor(public servicio: CinemaService) { }

  movies: any[];

  ngOnInit() {
    this.movies = this.servicio.getMovies();
  }




}
