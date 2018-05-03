import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MoviesService } from "../Movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-MyMovieComponent",
  templateUrl: "./MyMovieComponent.component.html",
  styleUrls: ["./MyMovieComponent.component.css"],
  providers: [MoviesService]
})
export class MyMovieComponentComponent implements OnInit {
  movie: Object;
  constructor(
    private router: Router,
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movie = this.moviesService.getMovie(parseInt(params["id"]));
    });
  }
}
