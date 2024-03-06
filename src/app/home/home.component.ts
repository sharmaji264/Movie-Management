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

  servers;
  filteredStatus = '';

  ngOnInit(): void {
    this.servers = this.moviesService.servers;
  }

  book(idx: number) {
    this.router.navigate(['details', idx]);
  }
}
