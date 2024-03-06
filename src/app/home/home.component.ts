import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  movies: {
    title: string;
    description: string;
    poster: string;
    trailers: string;
  }[];
  filteredStatus = '';

  ngOnInit(): void {
    this.movies = this.moviesService.servers;
  }

  book(idx: number) {
    this.router.navigate(['details', idx]);
  }
}
