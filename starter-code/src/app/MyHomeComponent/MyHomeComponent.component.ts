import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../Movies.service";
import { Movies } from "sample-movies";
import { Router } from '@angular/router';
@Component({
  selector: "app-MyHomeComponent",
  templateUrl: "./MyHomeComponent.component.html",
  styleUrls: ["./MyHomeComponent.component.css"],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<object> = [];
  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

  viewDetails(id) {
    this.router.navigate(['movie', id]);
  }
}
