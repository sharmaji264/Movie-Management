import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  movies = [];
  isAdmin: boolean;
  idx: number;
  constructor(
    private movieService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isAdmin = this.movieService.state;
  }
  ngOnInit(): void {
    this.movies = this.movieService.servers;
  }
  onCreateAccount(
    title: string,
    description: string,
    poster: string,
    link: string
  ) {
    this.movieService.addAccount(title, description, poster, link);
  }
  onDelete(idx: number) {
    this.idx = idx;
    this.movieService.delete(idx);
  }

  onEdit(idx: number) {
    this.movieService.giveIdx(idx);
    this.router.navigate(['edit', idx]);
  }
}
