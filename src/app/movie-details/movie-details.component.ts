import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  index: number;
  title: string;
  poster: string;
  description: string;
  trailer: string;
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.index = params['id'];
    });
    // console.log(this.index);
    this.title = this.moviesService.servers[this.index].title;
    this.description = this.moviesService.servers[this.index].description;
    this.poster = this.moviesService.servers[this.index].poster;
    this.trailer = this.moviesService.servers[this.index].trailers;
  }
  book() {
    this.router.navigate(['timings', this.index]);
  }
}
