import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean;
  name: string;
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.moviesService.state;
    if (this.isAdmin === true) {
      this.name = 'Admin';
    } else {
      this.name = 'User';
    }
  }
  LogOut() {
    this.router.navigate(['']);
  }
}
